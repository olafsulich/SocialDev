---
title: "When to Use Static Generation v.s. Server-side Rendering"
date: "2020-01-02"
---

Specyfikacja ECMAScript cały czas się rozwija, powstają nowe ciekawe featury. Jakiś czas temu, zostały
zaproponowane, przez [Gabriela Isenberga](https://twitter.com/the_gisenberg), dwa nowe: **nullish coalescing** i **optional chaining**. Dziś przyjrzymy im się trochę bliżej.

Zaczynamy!

## Nullish coalescing

Jest to logiczny operator, który zwraca wartość po prawej stronie od kropki(operand), jeśli ta po lewej jest `null` lub `undefined`.

### Operator OR(||)

Przypomnienie, operator **OR** zwraca wartość która jest prawdziwa. Spójrzmy na przykładzie:

```js
undefined || "Hello world!"; // 'Hello world!'
[1, 2, 3] || null; // [1,2,3]
"" || 27; //27
```

### Nullish coalescing i operator ??

Operator `??`, różni się tym od operatora `||`, że nie bierze pod uwagę wszystkich wartości `falsy`, a jedynie `null` i `undefined`.

```js
let userName = ""; // falsy value

const newUser = userName || "Karol"; //Karol
const anotherUser = userName ?? "Maciek"; // '', ponieważ wartość nie jest null/undefined
```

Okej, ale jak działa ten cały Nullish coalescing operator? Poniższe wyrażenia działają w ten sam sposób.

```js
someValue ?? anotherValue;
someValue !== undefined && someValue !== null ? someValue : anotherValue;
```

Spróbujmy połączyć znany nam już operator **OR** z operatorem `??`.

```js
null || undefined ?? "Karol"; // coś poszło nie tak - SyntaxError
(null || undefined) ?? "Karol" // Karol
```

### Operator ?? w praktyce

Stwórzmy funkcję, która będzie przyjmowała objekt użytkownika jako parametr, jeśli jego właściwość **userName** będzie `null` lub `undefined` zwrócimy imię **Karol**.

```js
const getUserName = (user) => user.userName ?? "Karol";
```

Możemy użyć również destrukturyzacji w połączeniu z defaultową wartością(😮):

```js
const getUserName = ({ userName = "Karol" }) => userName;
```

## Optional chaining

Jak to działa? Jeśli wartość przed znakiem zapytania jest `null` lub `undefined` to zwracamy `undefined`. Jeśli chodzi o funkcje, jeśli dana funkcja nie istnieje, zwracany jest `undefined`. To tyle, jeśli chodzi o teorię, przejdźmy do praktyki.

```js
const user = {
  name: "Maciej",
  email: "maciej@gmail.com",
  id: 123,
};

const userName = user.favouriteFood?.milk; // undefined
console.log(getUserId?.()); // undefined
let milk = user.favouriteFood && user.favouriteFood.milk; // stary sposób
milk = user.favouriteFood?.milk; // nowy sposób
```

### Metody, tablice i objekty

Jak wygląda sprawa z metodami obiektów? Bardzo podobnie jak w poprzednich przykładach:

```js
const getUserFavouriteFood = user.getFavouriteFood?.();
```

A co z tablicami i indexami?

```js
const arrayItem = someArray?.[7];
```

Short-circuiting, jeśli wartość po lewej stronie jest `null`/`undefined`, to operacja nie zostanie wykonana:

```js
const newUser = null;
const userAge = 20;
const incrementedAge = newUser?.[userAge++];

userAge; // 20
```

#### Zagnieżdżony optional chaining

Nasz objekt user:

```js
const user = {
  name: "Wojtek",
  email: "wojciechkowalski@gmail.com",
  details: {
    age: 28,
    address: {
      street: "Mickiewicza",
    },
  },
};
```

Jeśli chcielibyśmy wyciągnąć kod pocztowy, przy pomocy **optional chaining** moglibyśmy to zrobić w taki sposób:

```js
const zipCode = user.details?.address?.zipCode;
```

## Nullish coalescing w połączeniu z optional chaining

Nullish coalescing może być wykorzystany do podania defaultowej wartości, **po optional chaining**.
Użyjmy poprzedniego przykładu z kodem pocztowym.

```js
const user = {
  name: "Wojtek",
  email: "wojciechkowalski@gmail.com",
  details: {
    age: 28,
    address: {
      street: "Mickiewicza",
    },
  },
};

const zipCode = user.details?.address?.zipCode ?? "87-100"; // 87-100
```

## Podsumowanie

Mam nadzieję, że przybliżyłem Ci założenia stojące za **Nullish coalescing** i **Optional chaining**, jeśli chcesz się dowiedzieć więcej, możesz zajrzeć do źródeł, szczególnie polecam [Dr. Axela Rauschmayera](https://2ality.com/index.html) i oczywiście dokumentację [MDN](https://developer.mozilla.org/en-US/).

Do usłyszenia!

### Źródła

- [2ality - ECMAScript feature: Nullish coalescing for JavaScript](https://2ality.com/2019/08/nullish-coalescing.html)

- [2ality - ECMAScript feature: optional chaining](https://2ality.com/2019/07/optional-chaining.html)

- [MDN - Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

- [MDN - Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
