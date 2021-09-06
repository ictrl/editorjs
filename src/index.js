import React, { Component } from "react";
import ReactDOM from "react-dom";

import EditorJs from "@natterstefan/react-editor-js";

import { EDITOR_JS_TOOLS } from "./constants";
import { data } from "./data";

class App extends Component {
  async onSave() {
    const outputData = await this.editorInstance.save();
    console.log("outputData", outputData);
  }

  render() {
    return (
      <>
        <button onClick={this.onSave.bind(this)} type="button">
          Save Content (check console output)
        </button>
        <EditorJs
          editorInstance={(instance) => (this.editorInstance = instance)}
          tools={EDITOR_JS_TOOLS}
          data={data}
        />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
