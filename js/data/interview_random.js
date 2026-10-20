export const INTERVIEW_RANDOM_DATA = [
  {
    role: "Random & Curated Q&A",
    icon: "🎲",
    topics: [
      {
        topic: "System Design & UML",
        questions: [
          {
            q: "How are the dynamic aspects of a system represented in Unified Modeling Language (UML)?",
            a: "The dynamic aspects of a system in **Unified Modeling Language (UML)** capture its behavioral and runtime characteristics—specifically how objects collaborate, pass messages, change states, and execute operational workflows over time.\n\nThese dynamic aspects are modeled using **Behavioral Diagrams** (also known as **Dynamic Diagrams**), primarily interaction diagrams:\n\n1. **Sequence Diagrams:**\n   • **Focus:** Chronological time ordering.\n   • **Details:** Illustrate how objects interact over time by passing synchronous and asynchronous messages in a strict chronological sequence. Essential for tracing use cases, API request-response lifecycles, and call stacks.\n\n2. **Communication / Collaboration Diagrams:**\n   • **Focus:** Structural organization and architecture.\n   • **Details:** Emphasize the structural and architectural relationships between interacting objects and the messages exchanged between them, using numbered sequences to indicate order rather than a vertical timeline.\n\n3. **State Machine Diagrams (Statechart Diagrams):**\n   • **Focus:** Finite states and object lifecycles.\n   • **Details:** Illustrate the finite states an object or system can inhabit and how it transitions between them in response to internal or external events, triggers, and guards.\n\n4. **Activity Diagrams:**\n   • **Focus:** Stepwise workflow and operational logic.\n   • **Details:** Depict the operational control flow and business process from start to finish, including decision points, condition branches, and parallel (fork/join) executions.\n\n*(Note: While Structural diagrams like Class Diagrams show the static skeleton of what exists, Behavioral diagrams capture the living execution and dynamic lifecycle of the system.)*",
            difficulty: "Intermediate"
          }
        ]
      },
      {
        topic: "Data Serialization & XML Schema (XSD)",
        questions: [
          {
            q: "How do you generate and validate a valid XML document (info.xml) from a given XML Schema Definition (XSD) with qualified namespaces and fixed attributes?",
            a: "An **XML Schema Definition (XSD)** formally defines the structure, data types, element order, and constraints for valid XML documents.\n\n### 1. Given XSD Definition:\n```xml\n<?xml version=\"1.0\"?>\n<xs:schema xmlns:xs=\"http://www.w3.org/2001/XMLSchema\"\n           targetNamespace=\"https://www.doselect.com\"\n           xmlns=\"https://www.doselect.com\"\n           elementFormDefault=\"qualified\">\n  <xs:element name=\"info\">\n    <xs:complexType>\n      <xs:sequence>\n        <xs:element name=\"name\" type=\"xs:string\"/>\n        <xs:element name=\"empID\" type=\"xs:integer\"/>\n        <xs:element name=\"dept\" type=\"xs:string\"/>\n        <xs:element name=\"mobile\" type=\"xs:string\"/>\n        <xs:element name=\"isManager\" type=\"xs:boolean\" fixed=\"true\"/>\n        <xs:element name=\"DOB\" type=\"xs:date\"/>\n      </xs:sequence>\n    </xs:complexType>\n  </xs:element>\n</xs:schema>\n```\n\n### 2. Valid Conforming XML File (`info.xml`):\n```xml\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<info xmlns=\"https://www.doselect.com\"\n      xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n      xsi:schemaLocation=\"https://www.doselect.com info.xsd\">\n    <name>Jane Doe</name>\n    <empID>10023</empID>\n    <dept>Engineering</dept>\n    <mobile>+1-555-0199</mobile>\n    <isManager>true</isManager>\n    <DOB>1992-05-15</DOB>\n</info>\n```\n\n### 3. Key Schema Rules & Validation Highlights:\n• **Default Target Namespace (`xmlns=\"https://www.doselect.com\"`):** Since `elementFormDefault=\"qualified\"` is set in the schema, child elements belong to this namespace. Declaring it as the default namespace on the root `<info>` tag ensures all children inherit it without needing prefixes.\n• **Schema Instance Binding (`xmlns:xsi` & `xsi:schemaLocation`):** References the standard W3C XML Schema-Instance namespace and maps the target namespace to the physical `info.xsd` file.\n• **Strict Sequence Ordering (`<xs:sequence>`):** Elements must appear in the exact order declared (`name` → `empID` → `dept` → `mobile` → `isManager` → `DOB`). Any reordering will fail schema validation.\n• **Fixed Value Restriction (`fixed=\"true\"`):** The `<isManager>` element must contain the literal value `true`. Providing `false` or omitting it triggers a validation error.\n• **Strict Type Conformance:**\n  - `<empID>`: Valid integer (no decimals or non-numeric characters).\n  - `<DOB>`: Conforms to ISO-8601 date standard (`YYYY-MM-DD`).",
            difficulty: "Intermediate"
          }
        ]
      }
    ]
  }
];
