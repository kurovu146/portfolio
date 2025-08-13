import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMacos,
  SiJira,
  SiWindows,
} from "react-icons/si";

const ICON_SIZE = 64;

const TOOLS = [
  {
    key: "macos",
    label: "macOS",
    desc: "Primary operating system for development and builds.",
    Icon: SiMacos,
  },
  {
    key: "windows",
    label: "Windows",
    desc: "Secondary environment for work and testing.",
    Icon: SiWindows,
  },
  {
    key: "vscode",
    label: "VS Code",
    desc: "Main code editor with essential extensions.",
    Icon: SiVisualstudiocode,
  },
  {
    key: "postman",
    label: "Postman",
    desc: "Tool for API testing and managing collections.",
    Icon: SiPostman,
  },
  {
    key: "jira",
    label: "Jira",
    desc: "Project management for tasks, sprints, and roadmaps.",
    Icon: SiJira,
  },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {TOOLS.map(({ key, label, desc, Icon }) => (
        <OverlayTrigger
          key={key}
          placement="top"
          delay={{ show: 120, hide: 50 }}
          container={typeof document !== "undefined" ? document.body : undefined}
          popperConfig={{
            strategy: "fixed",
            modifiers: [
              { name: "flip", enabled: false },
              { name: "preventOverflow", options: { padding: 8 } },
            ],
          }}
          overlay={
            <Tooltip id={`tooltip-${key}`}>
              <div className="fw-semibold">{label}</div>
              <div className="small opacity-75">{desc}</div>
            </Tooltip>
          }
        >
          <Col
            xs={4}
            md={2}
            className="tech-icons d-flex justify-content-center align-items-center"
            style={{
              cursor: "pointer",
              height: 114,
              border: "2px solid transparent",
              borderRadius: 12,
            }}
            tabIndex={0}
            aria-label={label}
          >
            <Icon style={{ fontSize: ICON_SIZE, lineHeight: 1 }} />
          </Col>
        </OverlayTrigger>
      ))}
    </Row>
  );
}

export default Toolstack;
