/**
 * @license
 * Copyright 2018-2022 Streamlit Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

describe("components.iframe", () => {
  before(() => {
    cy.loadApp("http://localhost:3000/");
  });

  it("sets src correctly", () => {
    cy.get("iframe").should("have.attr", "src", "http://not.a.real.url");
  });

  it("sets width correctly", () => {
    cy.get("iframe").should("have.attr", "width", "200");
  });

  it("sets height correctly", () => {
    cy.get("iframe").should("have.attr", "height", "500");
  });

  it("sets scrolling correctly", () => {
    cy.get("iframe").should("have.attr", "scrolling", "auto");
  });
});
