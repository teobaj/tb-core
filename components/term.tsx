import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";

export const XTerminal = () => {
  let domRef = useRef(null);
  let term: Terminal;
  let [isLoaded, setIsLoaded] = useState<boolean>(false);
  let cmd: string = "";

  const router = useRouter();

  const onBackspace = () => {
    if (cmd.length > 0) {
      cmd = cmd.slice(0, -1);
      term.write("\b \b");
    }
  };

  const onCopy = () => {
    navigator.clipboard.writeText(term.getSelection());
  };

  const CMDS: { [key: string]: any } = {
    goto: (route: string) => {
      router.push(route);
    },
    login: () => {},
    proxy: (url: string) => {
      let newUrl = `/api/search?url=${url}`;
      router.push(newUrl);
    },
    config: (config: string) => {
      if (config === "vscode") {
        router.push("/api/config/vscode");
      } else if (config === "vim") {
        router.push("/api/config/vim");
      } else {
        term.writeln("");
        term.writeln("There is no such config");
      }
    },
  };

  const keyHandle: { [key: string]: any } = {
    "\r": () => {
      handleCmd();
      prompt();
    },
    "\x7F": onBackspace,
    "\x16": () => {
      navigator.clipboard.readText().then((data) => {
        cmd += data;
        term.write(data);
      });
    },
    "\x03": onCopy,
  };
  const prompt = () => {
    term.write("\r\n" + "$ ");
  };

  const handleCmd = () => {
    let cmdArr = cmd.split(" ");
    if (cmdArr[0] && CMDS[cmdArr[0]]) {
      CMDS[cmdArr[0]](cmdArr[1]);
    }
    cmd = "";
  };

  const initTerminal = async () => {
    const { Terminal } = await import("xterm");
    term = new Terminal({
      rows: 40,
      cols: 120,
      theme: {
        foreground: "#708284",
        background: "#001e27",
        cursor: "#708284",

        black: "#002831",
        brightBlack: "#001e27",

        red: "#d11c24",
        brightRed: "#bd3613",

        green: "#738a05",
        brightGreen: "#475b62",

        yellow: "#a57706",
        brightYellow: "#536870",

        blue: "#2176c7",
        brightBlue: "#708284",

        magenta: "#c61c6f",
        brightMagenta: "#5956ba",

        cyan: "#259286",
        brightCyan: "#819090",

        white: "#eae3cb",
        brightWhite: "#fcf4dc",
      },
    });
    term.open(domRef.current as any);
    term.writeln("Welcome to TB Core CLI");
    prompt();
    setIsLoaded(true);

    term.onKey((ev) => {
      if (keyHandle.hasOwnProperty(ev.key)) {
        keyHandle[ev.key]();
      } else {
        cmd += ev.key;
        term.write(ev.key);
      }
    });
  };

  useEffect(() => {
    !isLoaded && initTerminal();
  }, []);

  return <div ref={domRef} id="term"></div>;
};
