const fs = require("fs");

const envLine = "#!/usr/bin/env node\n"

const parentDir = "./dist"

const dir = fs.readdirSync(parentDir);

dir.forEach(file => {
    const filePath = `${parentDir}/${file}`
    const content = fs.readFileSync(filePath, "utf8");
    fs.writeFileSync(filePath, `${envLine}${content}`)
})