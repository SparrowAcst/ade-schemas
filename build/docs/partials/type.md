{{#if (is_type type "object") ~}}
{{> object . ~}}
{{~else~}}
{{#if (is_type type "array") ~}}
{{> array . ~}}
{{~else~}}{{> simple key=@key ~}}
{{/if ~}}
{{/if ~}}
{{#if $ref ~}} Reference to [{{escape $ref}}]({{escape $ref}}) {{/if}} 

{{#if oneOf ~}}
    **ONE OF:**
{{~/if}}

{{#each oneOf}}
-   {{~#if subschema~}}
    {{> schemaref_part . path=(pathjoinobj ../path @key . ) ~}}
    {{~else~}}
    {{> element_part . type=(or type ../type) path=(pathjoin path (plus "Option " (plus (plus @key 1) ": ")))}}
    {{~/if~}}
{{/each}}

{{#if anyOf ~}}
    **ANY OF:**<br/>
{{~/if}}


{{#each anyOf}}
- {{~#if subschema~}}
{{> schemaref_part . path=(pathjoinobj ../path @key . ) ~}}
  {{~else~}}
{{> element_part . type=(or type ../type) path=path}}
  {{~/if~}}
{{/each}}

{{#if allOf ~}}
    **ALL OF:**
{{~/if}}

{{#each allOf}}
-  {{~#if subschema~}}
    {{> schemaref_part . path=(pathjoinobj ../path @key . ) ~}}
    {{~else~}}
{{> element_part . type=(or type ../type) path=(pathjoin path (plus "Option " (plus (plus @key 1) ": ")))}}
    {{~/if~}}
{{/each}}

{{#each not}}
- **Not [{{plus @key 1}}]:**  
    {{~#if subschema~}}
    {{> schemaref_part . path=(pathjoinobj ../path @key . ) ~}}
    {{~else~}}
    {{> element_part . type=(or type ../type) path=(pathjoin path (plus "Option " (plus (plus @key 1) ": ")))}}
    {{~/if~}}
{{/each}}

{{#if (noproperties .)}}
**No properties.**
{{/if}}
