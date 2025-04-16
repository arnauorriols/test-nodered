const proc = await new Deno.Command("deno", {args: ["run", "-A", "--unstable-detect-cjs", "npm:node-red"], stdout: "inherit", "stderr": "inherit" }).output();
console.log(proc);
