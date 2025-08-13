import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiRedis, SiFirebase, SiPostgresql, SiNestjs } from "react-icons/si";

const ICON_SIZE = 64;

const TECHS = [
  { key: "nodejs", label: "Node.js", desc: "JavaScript runtime on Chrome V8.", Icon: DiNodejs },
  { key: "nestjs", label: "NestJS", desc: "Scalable server-side framework for Node.js.", Icon: SiNestjs },
  { key: "javascript", label: "JavaScript", desc: "Language of the web for interactive apps.", Icon: DiJavascript1 },
  { key: "cplusplus", label: "C++", desc: "High-performance, general-purpose language.", Icon: CgCPlusPlus },
  { key: "react", label: "React", desc: "Library for building user interfaces.", Icon: DiReact },
  { key: "mongodb", label: "MongoDB", desc: "NoSQL database for flexible schemas.", Icon: DiMongodb },
  { key: "git", label: "Git", desc: "Distributed version control system.", Icon: DiGit },
  { key: "firebase", label: "Firebase", desc: "Backend services for web and mobile.", Icon: SiFirebase },
  { key: "redis", label: "Redis", desc: "In-memory data store and cache.", Icon: SiRedis },
  { key: "postgresql", label: "PostgreSQL", desc: "Advanced open-source SQL database.", Icon: SiPostgresql },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {TECHS.map(({ key, label, desc, Icon }) => (
        <OverlayTrigger
          key={key}
          placement="top"
          delay={{ show: 120, hide: 50 }}
          container={typeof document !== "undefined" ? document.body : undefined}
          popperConfig={{
            strategy: "fixed",
            modifiers: [{ name: "flip", enabled: false }],
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

export default Techstack;
