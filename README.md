# SOpen-Close plugin

## Installation

Run:

```sh
npm i @yzhura/s-open-close
```

or link CDN into your HTML code:

```sh
<script src="https://cdn.jsdelivr.net/npm/@yzhura/s-open-close/dist/index.js" defer></script>
```

## Ho to use:

**Create open-close sctructure:**

```sh
<div class="faq-open-close open-close">
        <div class="opener">
            <h3>Title 1</h3>
            <div class="content">
                <p><a href="https://google.com" target="_blank">Lorem ipsum </a>dolor sit amet consectetur adipisicing elit. Ad, vitae accusamus deleniti voluptatibus laboriosam maiores repellendus ratione? Illo quisquam, ullam mollitia architecto natus ipsam reiciendis sit itaque error maxime vitae.</p>
            </div>
        </div>
        <div class="opener">
            <h3>Title 2</h3>
            <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, vitae accusamus deleniti voluptatibus laboriosam maiores repellendus ratione? Illo quisquam, ullam mollitia architecto natus ipsam reiciendis sit itaque error maxime vitae.</p>
            </div>
        </div>
    </div>
```

- `class="open-close"`, `class="content"` and `class="opener"` static classes. Don't change it

and in your js file:

```sh
new SOpenClose('.faq-open-close');
```

- '.faq-open-close' ---> ...coming from you HTML

## For more examples

clone this project and run:

```sh
npm i
npm run start
```

then open `example.html`