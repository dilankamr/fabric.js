const { exec } = require("child_process");

exec("npm run build", (error, stdout, stderr) => {
    if (error) {
        console.log(`build failed: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`build failed: ${stderr}`);
        return;
    }
    console.log(`build success: ${stdout}`);
});
