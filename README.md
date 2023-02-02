![Build and Test](https://github.com/fico-xpress/vdlx-datagrid/workflows/Build%20and%20Test/badge.svg?branch=master)
[![CodeQL](https://github.com/fico-xpress/vdlx-datagrid/actions/workflows/codeql.yml/badge.svg?branch=master)](https://github.com/fico-xpress/vdlx-datagrid/actions/workflows/codeql.yml)

# VDLX-DATAGRID

`vdlx-datagrid` provides a tabular visualisation, similar to `vdl-table`, but allows for much larger datasets to be displayed while trading off a few features in `vdl-table`.

## What is vdlx-datagrid
An easily implemented third-party alternative for the `vdl-table` component in a FICO Xpress Insight VDL view.

## Features available in vdlx-datagrid
For a list of available tags and attributes for the vdlx-datagrid component see [vdlx-datagrid-reference](https://fico-xpress.github.io/vdlx-datagrid/vdlx-datagrid-reference)

## How to use vdlx-datagrid in your Insight app

Download the appropriate release version of `vdx-datagrid` from [releases](https://github.com/fico-xpress/vdlx-datagrid/releases) - 
The first two digits of the vdlx-datagrid release version number must match the version of VDL you are using to develop. For example, if you are developing for VDL 4.6.X, download vdlx-datagrid version 4.6.X.

Unzip the `vdlx-datagrid.zip` release bundle into your Xpress Workbench `client_resources` folder. You can then add vdlx-datagrid in your views via the code editor-vdlx-datagrid is not available in the VDL Designer palette:

```html
<vdl-include src="vdlx-datagrid/vdlx-datagrid.vdl"></vdl-include>
```

`vdlx-datagrid` is mostly a drop-in replacement for `vdl-table` and can generally be used by renaming code examples:

```html
<vdlx-datagrid id="basic-example-1">
    <vdlx-datagrid-column set="SupportLevels">Support L.</vdlx-datagrid-column>
    <vdlx-datagrid-column entity="SupportCosts"></vdlx-datagrid-column>
    <vdlx-datagrid-column entity="ServiceLevelAgreements"></vdlx-datagrid-column>
</vdlx-datagrid>
``` 

## The vdl-datagrid examples app

Each release includes an Xpress Insight app containing examples of how to use `vdlx-datagrid` features.

- Download `vdlx-datagrid-examples-app.zip` from one of the [releases](https://github.com/fico-xpress/vdlx-datagrid/releases).
- Upload the App zip to Xpress Insight

## Versions

See [CHANGELOG](./CHANGELOG.md) for a list of changes in each version.

## Features comparison between `vdl-table` and `vdlx-datagrid`.

__Note:__ There are some features shared between `vdl-table` and `vdlx-datagrid` that are implemented differently. _Always test any code ported between the two._ 

### Features available in `vdl-table` that are not included in `vdlx-datagrid`

* Block and column selection
* Copy and Paste data
* Global search

### Features unique to `vdlx-datagrid`

* Support for larger datasets
* Scrollable table support

## Building from source

This information is only required if you are developing the `vdlx-datagrid` extension. See the 'Usage' section above for more on using this tag in your views. 

1. `npm install`
2. `npm run build`

Whilst developing vdlx-datagrid:

1. Build the library with `npm run build`. This will place the vdlx-datagrid vdl file and minified JS and CSS into the example app.
2. Start incremental build of the library with `npm run watch`. This will build an unminified version of the JS and CSS and place into the example app.
3. Add local `<client-resources-local-path>` path to the cfile `insight/application.xml`, pointing to the absolute path for `insight/client_resources`.
4. Build the example application: `npm run bundle:app`.
5. Upload the app `target/vdlx-datagrid-examples-app.zip` to your running Insight server.

## Building a release

See [RELEASE](./RELEASE.md) for instructions.


## Tooltip

Tooltips display informative text when users hover over, focus on, or tap an elements when activated.

There are two differents tooltips can be used inside vdlx-datagrid table
1. Cell Tooltips - To use cell tooltips `tooltip` attribute to be used in the column 
2. Column Header Tooltips - To use column header tooltip `headerTooltip` attribute to be used in the column 

# How to use tooltip in insight app

`tooltip` can generally be used for displaying details in cell on mousehover. For example:

```html
  <vdlx-datagrid-column entity="demand_facility" heading="Facility" tooltip="This is tooltip test for strings" visible="false" editor-options-set="FACILITY_DISPLAY_NAMES" editable="true"></vdlx-datagrid-column>
  ````

NOTE:- To display any aggregate values or other entity values for the same cell should use another attribute `cellTooltipFunc`

`cellTooltipFunc` is the attribute that takes any user defined function but in return it should get the calculated string and the array of entities for which the user wants to display the values in the cell.

For example :-

```
<script>
function displayCellTooltip(){
    return [calculatedStrings, ['demand_period','demand_max', 'demand_basis']]
}
</script>
```

```html
<vdlx-datagrid-column 
    entity="demand_product" 
    heading="Product" 
    tooltip="true" 
    cellTooltipFunc="=displayCellTooltip()"
    editor-options-set="PRODUCT_DISPLAY_NAMES" 
    editable="true">
</vdlx-datagrid-column>
```


`headerTooltip` can generally be used for displaying details in cell on mousehover. For example:


```html
  <vdlx-datagrid-column 
    entity="demand_max" 
    heading="Max Demand" 
    headerTooltip="This is headerTooltip test" 
    headerTooltipFunc="=displayHeaderTooltip()" 
    editable="true" 
    bottom-calc="sum">
</vdlx-datagrid-column>
  ````

NOTE:- For displaying aggregate values for the column in header tooltip `headerTooltipFunc` attribute to be used

`headerTooltipFunc` is the attribute that takes any user defined function but in return it should get the calculated string.

For example :-

```
<script>
function displayHeaderTooltip(){
    return calculatedStrings;
}
</script>
```

```html
<vdlx-datagrid-column entity="demand_product" heading="Product" tooltip="true" cellTooltipFunc="=displayHeaderTooltip()"
                            editor-options-set="PRODUCT_DISPLAY_NAMES" editable="true"></vdlx-datagrid-column>