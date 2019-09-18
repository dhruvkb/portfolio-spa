import BadCommand
  from '@/components/Terminal/commands/BadCommand/BadCommand'
import ChangeDirectory
  from '@/components/Terminal/commands/ChangeDirectory/ChangeDirectory'
import Concatenate
  from '@/components/Terminal/commands/Concatenate/Concatenate'
import Help
  from '@/components/Terminal/commands/Help/Help'
import Introduction
  from '@/components/Terminal/commands/Introduction/Introduction'
import List
  from '@/components/Terminal/commands/List/List'
import Tree
  from '@/components/Terminal/commands/Tree/Tree'
import WhoAmI
  from '@/components/Terminal/commands/WhoAmI/WhoAmI'
import WorkingDirectory
  from '@/components/Terminal/commands/WorkingDirectory/WorkingDirectory'

export const components = {
  BadCommand,
  ChangeDirectory,
  Concatenate,
  Help,
  Introduction,
  List,
  Tree,
  WhoAmI,
  WorkingDirectory
}

export const mapping = {
  bad: {
    component: 'BadCommand',
    description: 'See that a given command does not exist.'
  },
  cd: {
    component: 'ChangeDirectory',
    description: 'Switch to directory \'dirname\'.',
    args: 'dirname'
  },
  cat: {
    component: 'Concatenate',
    description: 'Read the contents of file \'filename\'.',
    args: 'filename'
  },
  help: {
    component: 'Help',
    description: 'Get some help with using the CLI.',
    args: '[--keyboard]'
  },
  intro: {
    component: 'Introduction',
    description: 'Enjoy the introductory ASCII art.'
  },
  ls: {
    component: 'List',
    description: 'List immediate contents of the current directory.'
  },
  tree: {
    component: 'Tree',
    description: 'Recursively list directories and contents.'
  },
  whoami: {
    component: 'WhoAmI',
    description: 'Get your own username.'
  },
  pwd: {
    component: 'WorkingDirectory',
    description: 'Remember the currently open directory.'
  }
}
