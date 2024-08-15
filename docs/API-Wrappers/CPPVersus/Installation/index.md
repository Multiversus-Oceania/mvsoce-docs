---
sidebar_position: 1
sidebar_label: Installation
---

# Installation Guide

To install this you need to build it manually. The commands are listed below.
```sh
git clone https://github.com/Multiversus-Oceania/cppversus
cd cppversus

meson builddir
cd builddir
meson compile
meson install
```

# Use as Library
If you plan to use this in a project you must use Meson (subject to change), the process is listed below:
```sh
git submodule add https://github.com/Multiversus-Oceania/cppversus subprojects/cppversus
```
Then you must add it into dependencies with:
```meson
dependency('cppversus')
```
Then you can include \<CPPVersus.h\> to include the library.