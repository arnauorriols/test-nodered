const proc = await new Deno.Command("deno", {args: ["run", "-A", "--unstable-detect-cjs", "npm:node-red", "--userDir", "./user"], stdout: "inherit", "stderr": "inherit" }).output();
console.log(proc);
