import path from "node:path";
import fs from "node:fs";

export function execute(res) {
    try {
        fs.readFile(path.dirname + "/index.mjs", (err, data) => {
            // try {
            runDanger();
            res.json({ ok: true });
            // } catch (error) {
            // console.log(
            //     "# fs.readFile() | Error was processed by the catch block: ",
            //     error
            // );
            //     res.json({ deubom: false });
            // }
        });
    } catch (error) {
        console.log(
            "# execute() | Error was processed by the catch block: ",
            error
        );
        res.json({ ok: false });
    }
}

function runDanger() {
    throw new Error("# runDanger()");
}

process.on("uncaughtException", (err) => {
    fs.writeSync(1, `# process() | Uncaught exception: ${err}\n`);

    process.exit();
});
