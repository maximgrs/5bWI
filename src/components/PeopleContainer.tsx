import Card from "./Card";

type Props = object;

// eslint-disable-next-line no-empty-pattern
export default function PeopleContainer({}: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
      <Card
        name="Sefa Öztürk"
        description="top schüler akdfjadf alkdfj aslökd nbankjdk fjaölsjkdf ajkldf andkf"
        age={21}
        imageUrl="https://picsum.photos/200/300"
      />
      <Card
        name="Sefa Öztürk"
        description="top schüler akdfjadf alkdfj aslökd nbankjdk fjaölsjkdf ajkldf andkf"
        age={21}
        imageUrl="https://picsum.photos/200/300"
      />
      <Card
        name="Sefa Öztürk"
        description="top schüler akdfjadf alkdfj aslökd nbankjdk fjaölsjkdf ajkldf andkf"
        age={21}
        imageUrl="https://picsum.photos/200/300"
      />
      <Card
        name="Sefa Öztürk"
        description="top schüler akdfjadf alkdfj aslökd nbankjdk fjaölsjkdf ajkldf andkf"
        age={21}
        imageUrl="https://picsum.photos/200/300"
      />
      <Card
        name="Sefa Öztürk"
        description="top schüler akdfjadf alkdfj aslökd nbankjdk fjaölsjkdf ajkldf andkf"
        age={21}
        imageUrl="https://picsum.photos/200/300"
      />
      <Card
        name="Sefa Öztürk"
        description="top schüler akdfjadf alkdfj aslökd nbankjdk fjaölsjkdf ajkldf andkf"
        age={21}
        imageUrl="https://picsum.photos/200/300"
      />
    </div>
  );
}
