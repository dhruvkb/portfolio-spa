import BadCommand from '@/templates/Portfolio/commands/BadCommand/BadCommand'
import Clear from '@/templates/Portfolio/commands/Clear/Clear'
import ChangeDirectory
  from '@/templates/Portfolio/commands/ChangeDirectory/ChangeDirectory'
import Concatenate from '@/templates/Portfolio/commands/Concatenate/Concatenate'
import E from '@/templates/Portfolio/commands/E/E'
import F from '@/templates/Portfolio/commands/F/F'
import Help from '@/templates/Portfolio/commands/Help/Help'
import Introduction
  from '@/templates/Portfolio/commands/Introduction/Introduction'
import List from '@/templates/Portfolio/commands/List/List'
import Tree from '@/templates/Portfolio/commands/Tree/Tree'
import WhoAmI from '@/templates/Portfolio/commands/WhoAmI/WhoAmI'
import WorkingDirectory
  from '@/templates/Portfolio/commands/WorkingDirectory/WorkingDirectory'

export const components = {
  BadCommand,
  Clear,
  ChangeDirectory,
  Concatenate,
  E,
  F,
  Help,
  Introduction,
  List,
  Tree,
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
  whoami: {
    name: 'whoami',
    component: 'WhoAmI',
    description: 'Get your own username.'
  },
  pwd: {
    name: 'pwd',
    component: 'WorkingDirectory',
    description: 'Remember the currently open directory.'
  }
}
