import prompts from 'prompts'
import fs from 'fs'
import path from 'path'
import { green } from 'kolorist'

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


  const finalComponentName = capitalized(result.componentName) 
  
  copyDir(`${templateFolder}`, `${componentsFolder}/${finalComponentName}`)
  updatePackageJSON(result.componentName)
  updateComponentStory(finalComponentName)
  showDoneMessage(finalComponentName)
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

async function updatePackageJSON(componentName) {
    const pkg = JSON.parse(
        fs.readFileSync(path.join(`${templateFolder}`, `package.json`), 'utf-8'),
    )
    // Update package name to match workspace name pattern
    pkg.name = `@perkd-ui/c-${componentName.toLowerCase().trim().replace(" ", "-")}`
    fs.writeFileSync(`${componentsFolder}/${componentName}/package.json` , JSON.stringify(pkg, null, 2))   
}

async function updateComponentStory(componentName) {
  fs.readFile(`${templateFolder}/src/stories/Template.stories.ts`, 'utf-8', (err, contents) => {
    if (err) {
      return console.error(err)
    }

    // Replace string occurrences
    const updated = contents.replace(/component-name/gi, componentName)
    // Write back to file
    fs.writeFile(`${componentsFolder}/${componentName}/src/stories/Template.stories.ts`, updated, 'utf-8', err2 => {
      if (err2) {
        console.log(err2)
      }
    })
  })
}

function showDoneMessage(componentName) {
    console.log(green(`\nDone.\n\nYour component ${componentName} is ready. Now run: \n`))
    console.log(`$ cd packages/${componentName}`)
    console.log(`$ yarn install`)
    console.log(green(`\nRun storybook to see your component:`))
    console.log(`$ yarn run sb\n`)
}


