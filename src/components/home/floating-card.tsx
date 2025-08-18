interface FloatingCardProps {
  zIndex: number;
  transform: string;
  logo: string;
  logoAlt: string;
  title: string;
  content: string;
  isLarge?: boolean;
}

export function FloatingCard({
  zIndex,
  transform,
  logo,
  logoAlt,
  title,
  content,
  isLarge = false,
}: FloatingCardProps) {
  const cardStyle = {
    position: "absolute" as const,
    top: 0,
    left: 0,
    pointerEvents: "none" as const,
    overflow: "hidden" as const,
    zIndex,
    width: "1189px",
    height: "812px",
    perspective: "406px",
  };

  const containerStyle = {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "1189px",
    height: "812px",
    transformStyle: "preserve-3d" as const,
    pointerEvents: "none" as const,
    transform:
      "translateZ(406px) matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, -35, 1) translate(594.5px, 406px)",
  };

  const cardContentStyle = {
    position: "absolute" as const,
    pointerEvents: "auto" as const,
    transform,
  };

  const cardInnerStyle = {
    pointerEvents: "none" as const,
    userSelect: "none" as const,
  };

  const cardBoxStyle = {
    width: isLarge ? "600px" : "330px",
    padding: isLarge ? "24px 20px" : "20px 16px",
    borderRadius: "18px",
    backgroundColor: isLarge
      ? "rgba(68, 68, 68, 0.95)"
      : "rgba(102, 102, 102, 0.85)",
    border: isLarge
      ? "2px solid rgba(255, 255, 255, 0.2)"
      : "1px solid rgba(255, 255, 255, 0.08)",
    transform: "translate(-50%, -50%)",
    textAlign: "center" as const,
    opacity: 0.9,
    filter: "blur(0px)",
    zIndex: isLarge ? 20 : 10,
  };

  const headerStyle = {
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    gap: isLarge ? "16px" : "12px",
    marginBottom: isLarge ? "16px" : "12px",
  };

  const logoStyle = {
    width: isLarge ? "40px" : "24px",
    height: isLarge ? "40px" : "24px",
  };

  const titleStyle = {
    fontSize: isLarge ? "32px" : "22px",
    fontWeight: "bold" as const,
    color: "white",
    textShadow: "rgba(0, 0, 0, 0.8) 2px 2px 4px",
  };

  const contentStyle = {
    fontSize: isLarge ? "18px" : "13px",
    lineHeight: isLarge ? 1.5 : 1.3,
    color: "rgb(204, 204, 204)",
    textShadow: "rgba(0, 0, 0, 0.8) 1px 1px 2px",
  };

  return (
    <div style={cardStyle}>
      <div style={containerStyle}>
        <div style={cardContentStyle}>
          <div style={cardInnerStyle}>
            <div style={cardBoxStyle}>
              <div style={headerStyle}>
                <img alt={logoAlt} src={logo} style={logoStyle} />
                <div style={titleStyle}>{title}</div>
              </div>
              <div style={contentStyle}>{content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
