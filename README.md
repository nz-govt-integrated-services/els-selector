This is the repository for a prototype of a service to help parents choose an early learning service. It is a `create-react-app` application.

This is deployed using GitHub Pages. When a pull request is merged to master, it will be automatically deployed.

### Decision tree

Data for the decision tree is in `src/data/decision-tree.json`. The decision tree component is based off the [React Decision Tree](https://github.com/maia-miller/react-decision-tree#readme) component - the data format for that component is documented there.


### Table

Data for the table is in `src/data/table-data.json`.

`categories` (array of objects)
  The top header row of the table contains the categories. They are in the order defined here, and this defines the order of the `types` - types with no category are listed last.

  Each category has:
    - `name` (string): name of category
    - `members` (array): types of ELS that are included in this category, should match keys from `types`

`types` (object)
  The second header row of the table contains the types. Keys are reused in `categories` and `attributes`.

  - `name` (string): name of type

`attributes` (array of objects)
  Each attribute creates a new row in the table body. 

  Each attribute has:
    - `name` (string): name of attribute
    - `values`: object

  An attribute `value` for an ELS `type` can have:
    - `value` (string, optional) - can be `true`, `false`, `partial`, `unknown`
    - `notes` (string, optional) - this is the text in the cell
    - `links` (array, optional) - list of links to include, `{"text": "", "href": ""}`



## Setup

This application requires [Node](https://nodejs.org/en/) and [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable).

To install dependencies:

`yarn install`

To run the app:

`yarn start`

To run tests:

`yarn test`
