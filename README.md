# ts-dox

ts-dox is an opinionated tool for documenting JavaScript or TypeScript programmes.

Simply run ts-dox in a directory that has JavaScript/TypeScript files or has sub-directories that have JavaScript/TypeScript folders.  By default the programme will output to the `docs` directory in your current working directory.  For example:

```bash
cd ~/projects/my-cool-thing
ts-dox
```

Would search `~/projects/my-cool-thing/**/*.{js|ts}` and output documentation to `~/projects/my-cool-thing/docs` in HTML format

## What Does It Do?

ts-dox organizes all files into a tree and attempts to match up three co-located files:

- some-es-module.ts
- some-es-module.spec.ts
- some-es-module.etc.spec.ts _(optional, for housing tests that don't read as documentation)_

These files are used to generate a `DocEsModule` object which contains data that will be paired with an HTML template and ultimately document the EcmaScript module.

Once all of the ES modules have been iterated over they end up in one of three buckets:

- The document tree
- The undocumented tree
- The speccial case tree

These three trees are then linked into a user specified (or auto-specified) `index.html` file.

## Motivation

Current documentation tools seem to focus on source code.  They also seem to be either too light, or too heavy.  This tool was inspired by two other tools that exactly fit those descriptions, [docco](https://jashkenas.github.io/docco/ "Docco") and [dgeni](https://github.com/angular/dgeni "dgeni").  These are both great tools and there's no intent to knock them, they provided the ideas for ts-dox.

The hope is that this tooling system can be kept light and user friendly.  This tool is targeted at people who:

- do not want to write documentation
- write co-located unit tests
- want their unit tests to _be_ the documentation
- don't want their regression unit tests or other (etc) unit tests "confusing" newbs
- want to use directory structure to categorize/organize docs


## Contributing

Contributions are welcome.  Please read [CONTRIBUTING.md](./contributing.md "ts-dox's Contributing Guide")

## License

Given the fact that this is a user facing programme and a for fun side project the full blown GPL seems like an appropriate license.  Sometims the GPL scares people but ts-dox can assure everyone that:

- The output of ts-dox is owned by whomever/whatever owns the input source 
- To be clear ts-dox asserts zero rights or interest at all in the data it processes


[![GPLv3 License Logo and Local Text][licenseImage]][licenseText]

[licenseImage]: https://www.gnu.org/graphics/gplv3-127x51.png "GPLv3 logo"
[licenseText]: ./LICENSE "GPLv3 Full Text"

Copyright (c) 2016 Michael J. Bennett

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
