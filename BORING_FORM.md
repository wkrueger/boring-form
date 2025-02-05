# Boring form

Yet another form library.

## Plan

Base form:

  - Form fields are pre-defined from a serializable format;
  - Validation definition must also be serializable;
  - Declare a FormSpec function which updates the form definition according to state, etc - in order
    to implement form logic;
  - Allow for $ref wildcards in FormSpec;
  - Supply at least 2 render presets which render forms from the form definition;
    - The default render presets expect a normalized version of the form definition, including tabs, groups and fields;
    - (2.0) the form normalization may be replaced for different use cases;
    - The render presets offer many OOP hooks to allow customization;
  - Suggest an initial collection of field types
  - Suggest an initial implementation of the initial collection, using a popular library (i.e. Shadcn);

Relation module (selects and autocompletes):
  - The select module abstracts selects and autocompletes;
  - Initial labels are optional and are supplied through an extra prop;
  - Select and autocomplete extra metadata may be optionally emitted for use on business rules;
  - A phetora of options:
    - Customize option labels with template strings
    - Proxy options to the data layer