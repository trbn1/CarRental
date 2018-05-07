export class Item {
  $key!: string;
  marka!: string;
  model!: string;
  paliwo!: string;
  skrzynia!: string;
  drzwi!: number;
  miejsca!: number;
  silnik!: number;
  moc!: number;
  timestamp!: number;
}

export class Book {
  $key!: string;
  startdate!: string;
  enddate!: string;
  name!: string;
  surname!: string;
  phone!: string;
  timestamp!: number;
}
