export interface infoList {
  title: string;
  indicator: string;
  icon: string;
  from: string;
  to: string;
  dueDate: string;
}

export const list: infoList[]= [
  {
    title: 'Work Flow: Requires Location',
    indicator: 'Uncompleted',
    icon: 'assets/icon/info/red.svg',
    from: 'developer@gmail.com',
    to: 'joboffer@gmail.com',
    dueDate: '01 December',
  },
  {
    title: 'Work Flow: Requires Location',
    indicator: 'Low Risk',
    icon: 'assets/icon/info/green.svg',
    from: 'developer@gmail.com',
    to: 'joboffer@gmail.com',
    dueDate: '02 December',
  },
  {
    title: 'Work Flow: Requires Location',
    indicator: 'Uncompleted',
    icon: 'assets/icon/info/red.svg',
    from: 'developer@gmail.com',
    to: 'joboffer@gmail.com',
    dueDate: '03 December',

  },
  {
    title: 'Work Flow: Requires Location',
    indicator: 'Needs Review',
    icon: 'assets/icon/info/gray.svg',
    from: 'developer@gmail.com',
    to: 'joboffer@gmail.com',
    dueDate: '04 December',

  },
]
