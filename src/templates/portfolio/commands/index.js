import BadCommand
  from '@/templates/portfolio/commands/BadCommand'
import Clear
  from '@/templates/portfolio/commands/Clear'
import ChangeDirectory
  from '@/templates/portfolio/commands/ChangeDirectory'
import Concatenate
  from '@/templates/portfolio/commands/Concatenate'
import E
  from '@/templates/portfolio/commands/E'
import Exit
  from '@/templates/portfolio/commands/Exit'
import F
  from '@/templates/portfolio/commands/F'
import Help
  from '@/templates/portfolio/commands/Help'
import Introduction
  from '@/templates/portfolio/commands/Introduction'
import List
  from '@/templates/portfolio/commands/List'
import Tree
  from '@/templates/portfolio/commands/Tree'
import Vim
  from '@/templates/portfolio/commands/Vim'
import WhoAmI
  from '@/templates/portfolio/commands/WhoAmI'
import WorkingDirectory
  from '@/templates/portfolio/commands/WorkingDirectory'

export const components = {
  BadCommand,
  Clear,
  ChangeDirectory,
  Concatenate,
  E,
  Exit,
  F,
  Help,
  Introduction,
  List,
  Tree,
  Vim,
  WhoAmI,
  WorkingDirectory
}

export const mapping = {
  bad: {
    name: 'bad',
    component: 'BadCommand',
    description: 'See that a given command does not exist.',
    isHidden: true
  },
  clear: {
    name: 'clear',
    component: 'Clear',
    description: 'Clear the screen, preserving history.'
  },
  cd: {
    name: 'cd',
    args: ChangeDirectory.argSpec,
    component: 'ChangeDirectory',
    description: 'Switch to directory \'dirname\'.'
  },
  cat: {
    name: 'cat',
    args: Concatenate.argSpec,
    component: 'Concatenate',
    description: 'Read the contents of file \'filename\'.',
    isLongTerm: true
  },
  e: {
    name: 'e',
    component: 'E',
    description: 'E!',
    isHidden: true
  },
  exit: {
    name: 'exit',
    component: 'Exit',
    description: 'Exit the terminal.'
  },
  f: {
    name: 'f',
    component: 'F',
    description: 'Pay respects.',
    isHidden: true
  },
  help: {
    name: 'help',
    args: Help.argSpec,
    component: 'Help',
    description: 'Get some help with using the CLI.'
  },
  intro: {
    name: 'intro',
    component: 'Introduction',
    description: 'Enjoy the introductory ASCII art.'
  },
  ls: {
    name: 'ls',
    args: List.argSpec,
    component: 'List',
    description: 'List immediate contents of directory \'dirname\'.'
  },
  tree: {
    name: 'tree',
    args: Tree.argSpec,
    component: 'Tree',
    description: 'Recursively list contents of directory \'dirname\'.'
  },
  vim: {
    name: 'vim',
    args: Vim.argSpec,
    component: 'Vim',
    description: 'Open the file in a view of its own.'
  },
  whoami: {
    name: 'whoami',
    args: WhoAmI.argSpec,
    component: 'WhoAmI',
    description: 'Get your own username.'
  },
  pwd: {
    name: 'pwd',
    component: 'WorkingDirectory',
    description: 'Remember the currently open directory.'
  }
}
