
// v0.0.2
import { exec } from 'child_process'
import prompts from 'prompts'
import fs from 'fs'
import path from 'path'
import { green, lightBlue} from 'kolorist'

const componentsFolder = './packages'
const templateFolder = './.generator/tpl'
const capitalized = (word) => word.charAt(0).toUpperCase() + word.slice(1)

init();

async function init() {
  // Ask for component name
  let result = await prompts(
        [{
            type: 'text',
            name: 'componentName',
            message: 'What is the name of the component?',
            validate: (value) => {
                if (fs.existsSync(`${componentsFolder}/${value}`)) { 
                    return 'Component already exists'
                }

                return value.length > 0 ? true : 'Please enter a name for the component'
            } 
        }]
  )

  const componentTag = `${result.componentName.toLowerCase().trim().replace(" ", "-")}`

  // Create a new branch for the component
  exec(`git checkout -b component/${componentTag}`, (err, _stdout, stdmsg) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }

    copyDir(`${templateFolder}`, `${componentsFolder}/${capitalized(result.componentName)}`)
    updateAssets(result.componentName)
    showDoneMessage(`${capitalized(result.componentName)}`, `${stdmsg}`)
  })
}

function updateAssets(componentName) {
  updatePackageJSON(componentName)
  updateStorybookMeta(componentName)
}

async function updatePackageJSON(componentName) {
    const pkg = JSON.parse(
        fs.readFileSync(path.join(`${templateFolder}`, `package.json`), 'utf-8'),
    )
    // Update package name to match workspace name pattern
    pkg.name = `@ui/c-${componentName.toLowerCase().trim().replace(" ", "-")}`
    fs.writeFileSync(`${componentsFolder}/${componentName}/package.json` , JSON.stringify(pkg, null, 2))   
}

// Update Component story to match component name
async function updateStorybookMeta(componentName)  {
  const component = capitalized(componentName)

  fs.readFile(path.join(`${templateFolder}/src/stories`, `Component.stories.ts`), 'utf-8', async (err, contents) => {
    if (err) {
      return console.error(err)
    }

    let content = contents.replace(/component-name/gi, component)
    // update Storybook meta to match component name 
    await writeToFile(`${componentsFolder}/${component}/src/stories/Component.stories.ts`, content)

    renameFile(`${componentsFolder}/${component}/src/stories/Component.stories.ts`,
      `${componentsFolder}/${component}/src/stories/${component}.stories.ts`)
    
    renameFile(`${componentsFolder}/${component}/src/Component.svelte`,
               `${componentsFolder}/${component}/src/${component}.svelte`)
    
  })
}

function showDoneMessage(componentName, gitBranch) {
    console.log(green(`Your component ${componentName} is ready. \nInstalling dependencies ... \n`))
    exec(`yarn install --silent`, (err ) => { 
      if (err) {
        console.error(`exec error: ${err}`);
        return;
      }
      console.log(`Dependencies installed.`)

      console.log(green(`\nYour component folder:`))
      console.log(`packages/${componentName}`)

      console.log(green(`\nRun storybook to see your component:`))
      console.log(`$ yarn run sb\n`)

      console.log(lightBlue(`${gitBranch}`));
    })
}

// ----------------------------------------------
// HELPER FUNCTIONS
// ! May need await for async functions (file operations) if they become issues

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true })

  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

function copy(src , dest ) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    fs.copyFileSync(src, dest)
  }
}

async function writeToFile(file, content, cb) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, content, 'utf-8', err => {
        if (err) {
          console.log(err)
        }
      
      resolve({})
    })
  })
}

function renameFile(fromFile, toFile) {
  fs.rename(fromFile , toFile, (err) => {
    if (err) throw err;
    // console.log('File renamed successfully!');
  });
}
