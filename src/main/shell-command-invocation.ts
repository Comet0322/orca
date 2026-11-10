export type ShellCommandInvocation = {
  file: string
  args: string[]
  windowsVerbatimArguments: boolean
}

// Mirrors what spawn's shell option does, but names the interpreter explicitly.
export function shellCommandInvocation(
  command: string,
  shellPath?: string
): ShellCommandInvocation {
  if (process.platform === 'win32') {
    return {
      file: shellPath ?? (process.env.ComSpec || 'cmd.exe'),
      args: ['/d', '/s', '/c', `"${command}"`],
      windowsVerbatimArguments: true
    }
  }
  return { file: shellPath ?? '/bin/sh', args: ['-c', command], windowsVerbatimArguments: false }
}
