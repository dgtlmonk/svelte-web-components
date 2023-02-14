
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
  exec(`git checkout -b component/${componentTag}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }

    // Log the output of the command
    // console.log(`stdout: ${stdout}`);
    copyDir(`${templateFolder}`, `${componentsFolder}/${capitalized(result.componentName)}`)
    updateAssets(result.componentName)
    showDoneMessage(`${capitalized(result.componentName)}`, `${stderr}`)
    // console.log(lightBlue(`${stderr}`));
  })
}

function updateAssets(componentName) {
  const finalComponentName = capitalized(componentName);

  updatePackageJSON(componentName)
  updateComponentStory(finalComponentName)
}


async function updatePackageJSON(componentName) {
    const pkg = JSON.parse(
        fs.readFileSync(path.join(`${templateFolder}`, `package.json`), 'utf-8'),
    )
    // Update package name to match workspace name pattern
    pkg.name = `@perkd-ui/c-${componentName.toLowerCase().trim().replace(" ", "-")}`
    fs.writeFileSync(`${componentsFolder}/${componentName}/package.json` , JSON.stringify(pkg, null, 2))   
}

// Update Component story to match component name
async function updateComponentStory(componentName) {
  fs.readFile(path.join(`${templateFolder}/src/stories`, `Component.stories.ts`), 'utf-8', (err, contents) => {
    if (err) {
      return console.error(err)
    }

    const updated = contents.replace(/component-name/gi, componentName)
    // Write back to file
    fs.writeFile(`${componentsFolder}/${componentName}/src/stories/Component.stories.ts`, updated, 'utf-8', err2 => {
      if (err2) {
        console.log(err2)
      }
    })
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