const PAGES = {
  overview: {
    title: "TURTLE GP Documentation",
    description: "Welcome to the TURTLE GP documentation. TURTLE GP is a modern, self-hosted game server management platform that gives you full control over your game infrastructure.",
    sections: [
      {
        type: "feature-grid",
        items: [
          {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
            title: "Multi-Server Management",
            desc: "Deploy, start, stop, and monitor any number of game servers from a single dashboard."
          },
          {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
            title: "Modular Daemon (Wings)",
            desc: "Lightweight agent that runs on game server machines, handles process management, SFTP, and stats."
          },
          {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
            title: "Enterprise Security",
            desc: "Password policies, account lockout, CSP headers, bcrypt hashing, and role-based access control."
          },
          {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
            title: "Configurable & Extensible",
            desc: "Environment-based configuration, Java auto-install, SteamCMD integration, webhook notifications."
          },
          {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>`,
            title: "Real-Time Monitoring",
            desc: "Live CPU, RAM, and uptime tracking per server with resource-limit enforcement."
          },
          {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>`,
            title: "Multi-User Support",
            desc: "Admin and user roles with granular server assignment and audit logging."
          }
        ]
      },
      {
        type: "h2",
        text: "Tech Stack"
      },
      {
        type: "table",
        headers: ["Component", "Technology", "Purpose"],
        rows: [
          ["Panel (Frontend)", "React + TypeScript + Vite", "Web dashboard UI"],
          ["Panel (Backend)", "Node.js + Express + TypeScript", "REST API & WebSocket proxy"],
          ["Daemon (Wings)", "Node.js", "Game server process manager"],
          ["Database", "SQLite (sql.js)", "Persistent storage"],
          ["SFTP", "Built-in SSH2", "File management"],
          ["Build Tool", "Vite", "Bundling & dev server"]
        ]
      },
      {
        type: "h2",
        text: "Architecture Overview"
      },
      {
        type: "p",
        text: "TURTLE GP uses a two-component architecture: the Panel (control plane) and the Daemon (data plane). The Panel provides the web UI and REST API. One or more Daemon instances connect to the Panel via WebSocket and execute game server processes on their host machines."
      },
      {
        type: "p",
        text: "Communication between Panel and Daemon uses a JSON-based protocol over a persistent WebSocket connection, with automatic reconnection and exponential backoff."
      },
      {
        type: "info-box",
        variant: "info",
        title: "Default Admin Credentials",
        body: "On first install, a default admin account is created with username <code>admin</code> and password <code>admin123</code>. <strong>You will be required to change the password on first login.</strong>"
      }
    ]
  },

  installation: {
    title: "Installation",
    description: "Get TURTLE GP running in minutes. Choose your deployment method below.",
    sections: [
      {
        type: "h2",
        text: "Prerequisites"
      },
      {
        type: "ul",
        items: [
          "Node.js v18 or higher",
          "npm (comes with Node.js)",
          "A server or VPS with at least 1 GB RAM",
          "Port 3001 (Panel API) and port 443 or 80 (if using reverse proxy) must be open",
          "A domain name pointed to your server (recommended)"
        ]
      },
      {
        type: "h2",
        text: "Quick Start (Panel)"
      },
      {
        type: "step-list",
        steps: [
          { title: "Clone the repository", body: "Download the TURTLE GP source code to your server." },
          { title: "Install dependencies", body: "Run <code>npm install</code> in both the <code>server/</code> and <code>panel/</code> directories." },
          { title: "Configure environment", body: "Set <code>CORS_ORIGIN</code> to your panel URL and <code>JWT_SECRET</code> to a random string in your environment or <code>.env</code> file." },
          { title: "Build the panel", body: "Run <code>npm run build</code> in the <code>panel/</code> directory to produce the production bundle." },
          { title: "Start the server", body: "Run <code>npm start</code> in the <code>server/</code> directory. The API will be available on port 3001." }
        ]
      },
      {
        type: "code-block",
        lang: "bash",
        code: `git clone <repo-url> gamepanel
cd gamepanel/server && npm install
cd ../panel && npm install && npm run build
cd ../server
set JWT_SECRET=your-random-secret
set CORS_ORIGIN=http://your-panel-domain.com:3001
npm start`
      },
      {
        type: "info-box",
        variant: "warning",
        title: "Important",
        body: "Change the <code>JWT_SECRET</code> to a strong random value in production. Do not use the default value."
      },
      {
        type: "h2",
        text: "Daemon (Wings) Installation"
      },
      {
        type: "p",
        text: "The Daemon runs on your game server machines. It connects to the Panel over WebSocket and manages game server processes."
      },
      {
        type: "step-list",
        steps: [
          { title: "Install Node.js", body: "Ensure Node.js v22+ is installed on the game server." },
          { title: "Copy Daemon files", body: "Transfer the <code>daemon/</code> directory to your game server." },
          { title: "Install dependencies", body: "Run <code>npm install</code> inside the <code>daemon/</code> directory." },
          { title: "Run setup wizard", body: "Run <code>node index.js --setup</code> and follow the prompts to configure the Panel URL and authentication token." },
          { title: "Start the Daemon", body: "Run <code>node index.js</code> or <code>./start.sh</code> to start Wings." }
        ]
      },
      {
        type: "code-block",
        lang: "bash",
        code: `# On your game server:
cd ~/daemon
npm install
node index.js --setup
node index.js`
      },
      {
        type: "h2",
        text: "Systemd Service (Linux)"
      },
      {
        type: "p",
        text: "For production deployment on Linux, use the provided systemd service unit to manage Wings as a background service."
      },
      {
        type: "code-block",
        lang: "bash",
        code: `sudo cp wings.service /etc/systemd/system/wings.service
sudo systemctl daemon-reload
sudo systemctl enable wings
sudo systemctl start wings`
      },
      {
        type: "info-box",
        variant: "success",
        title: "Auto-Restart",
        body: "The systemd service is configured with <code>Restart=always</code> and a 1048576 open-file limit, ensuring Wings stays online even under heavy loads."
      }
    ]
  },

  configuration: {
    title: "Configuration",
    description: "TURTLE GP is configured through environment variables and a configuration file. All options have sensible defaults for development.",
    sections: [
      {
        type: "h2",
        text: "Environment Variables"
      },
      {
        type: "table",
        headers: ["Variable", "Default", "Description"],
        rows: [
          ["PORT", "3001", "API server port"],
          ["JWT_SECRET", "(auto-generated)", "Secret key for JWT token signing"],
          ["JWT_EXPIRY", "7d", "JWT token expiration duration"],
          ["CORS_ORIGIN", "*", "Allowed CORS origin URL"],
          ["BCRYPT_ROUNDS", "12", "bcrypt salt rounds for password hashing"],
          ["TRUST_PROXY", "false", "Trust proxy headers (set 'true' behind nginx)"]
        ]
      },
      {
        type: "h2",
        text: "Security Configuration"
      },
      {
        type: "p",
        text: "Security settings are defined in <code>server/src/config.ts</code> and can be customized before building."
      },
      {
        type: "table",
        headers: ["Setting", "Default", "Description"],
        rows: [
          ["PASSWORD_MIN_LENGTH", "10", "Minimum password length"],
          ["PASSWORD_REQUIRE_UPPER", "true", "Require at least one uppercase letter"],
          ["PASSWORD_REQUIRE_LOWER", "true", "Require at least one lowercase letter"],
          ["PASSWORD_REQUIRE_DIGIT", "true", "Require at least one digit"],
          ["PASSWORD_REQUIRE_SPECIAL", "true", "Require at least one special character"],
          ["MAX_LOGIN_ATTEMPTS", "5", "Failed attempts before account lockout"],
          ["LOGIN_LOCKOUT_MINUTES", "15", "Lockout duration in minutes"],
          ["FORCE_PASSWORD_CHANGE", "true", "Force new users to change password on first login"]
        ]
      },
      {
        type: "info-box",
        variant: "info",
        title: "Daemon Config",
        body: "The Daemon stores its configuration in <code>daemon/config.json</code>, which is generated by the <code>--setup</code> wizard."
      },
      {
        type: "h2",
        text: "Webhook Configuration"
      },
      {
        type: "p",
        text: "TURTLE GP supports Discord webhooks for server lifecycle notifications. Set the webhook URL in the <code>panel_settings</code> table:"
      },
      {
        type: "code-block",
        lang: "sql",
        code: `-- Add a webhook URL for Discord notifications
INSERT INTO panel_settings (key, value) VALUES ('webhook_url', 'https://discord.com/api/webhooks/your-webhook-id/your-token');`
      },
      {
        type: "p",
        text: "Webhook events include: <span class='tag blue'>server_start</span> <span class='tag green'>server_stop</span> <span class='tag amber'>server_crash</span> <span class='tag red'>server_reinstall</span>"
      }
    ]
  },

  servers: {
    title: "Server Management",
    description: "Learn how to create, configure, and manage game servers through the panel.",
    sections: [
      {
        type: "h2",
        text: "Creating a Server"
      },
      {
        type: "p",
        text: "To create a new game server, navigate to the Admin panel and click <strong>Create Server</strong>. Fill in the required fields:"
      },
      {
        type: "ul",
        items: [
          "<strong>Name</strong> &mdash; A friendly name to identify your server",
          "<strong>Game ID</strong> &mdash; The game type (e.g., <code>minecraft</code>, <code>rust</code>, <code>source</code>)",
          "<strong>Install Path</strong> &mdash; Directory on the Daemon where server files will be stored",
          "<strong>Startup Command</strong> &mdash; The command used to launch the server (e.g., <code>java -jar server.jar</code>)",
          "<strong>RAM Limit</strong> &mdash; Maximum memory allocation in MB (0 = unlimited)",
          "<strong>CPU Limit</strong> &mdash; Maximum CPU usage percentage (0 = unlimited)",
          "<strong>Port</strong> &mdash; The server port to expose"
        ]
      },
      {
        type: "info-box",
        variant: "info",
        title: "Auto-Install",
        body: "For supported game types like Minecraft, Java is automatically detected and installed. SteamCMD games require SteamCMD to be set up on the Daemon."
      },
      {
        type: "h2",
        text: "Server Lifecycle"
      },
      {
        type: "table",
        headers: ["Action", "Description", "API Endpoint"],
        rows: [
          ["Start", "Boots the server process on the Daemon", "POST /api/servers/:id/start"],
          ["Stop", "Sends SIGTERM, then SIGKILL after 10s grace", "POST /api/servers/:id/stop"],
          ["Restart", "Stops then starts the server", "POST /api/servers/:id/restart"],
          ["Clone", "Duplicates the server with a new name and ports", "POST /api/servers/:id/clone"],
          ["Reinstall", "Re-runs the install process", "POST /api/servers/:id/reinstall"],
          ["Delete", "Permanently removes the server", "DELETE /api/servers/:id"]
        ]
      },
      {
        type: "h2",
        text: "Monitoring"
      },
      {
        type: "p",
        text: "The dashboard provides real-time metrics for each server:"
      },
      {
        type: "ul",
        items: [
          "<strong>CPU Usage</strong> &mdash; Real-time processor utilization, updated every 3 seconds",
          "<strong>RAM Usage</strong> &mdash; Current working set memory in MB",
          "<strong>Uptime</strong> &mdash; How long the server has been running",
          "<strong>Status</strong> &mdash; Current state: running, stopped, error, or installing",
          "<strong>Console Log</strong> &mdash; Live streaming log output from the server process"
        ]
      },
      {
        type: "info-box",
        variant: "warning",
        title: "Resource Limits",
        body: "If a server exceeds its configured RAM or CPU limit, it will be automatically stopped by the Daemon. Set limits to 0 for unrestricted operation."
      },
      {
        type: "h2",
        text: "Auto-Restart"
      },
      {
        type: "p",
        text: "Enable auto-restart on a per-server basis to automatically recover from crashes. The Daemon waits 5 seconds before restarting and uses exponential backoff to prevent restart loops."
      },
      {
        type: "code-block",
        lang: "json",
        code: `// Server configuration with auto-restart enabled
{
  "autoRestart": true,
  "startupCommand": "java -Xmx1024M -jar server.jar nogui",
  "ramLimit": 2048,
  "cpuLimit": 80
}`
      }
    ]
  },

  users: {
    title: "Users & Authentication",
    description: "TURTLE GP features a complete authentication system with role-based access control and enterprise-grade security policies.",
    sections: [
      {
        type: "h2",
        text: "User Roles"
      },
      {
        type: "table",
        headers: ["Role", "Permissions", "Description"],
        rows: [
          ["Admin", "Full access", "Can manage servers, users, nodes, and system settings"],
          ["User", "Limited access", "Can only manage servers assigned to them"]
        ]
      },
      {
        type: "h2",
        text: "Authentication Flow"
      },
      {
        type: "step-list",
        steps: [
          { title: "Login", body: "User submits credentials via <code>POST /api/auth/login</code>. Server validates against bcrypt hash." },
          { title: "Lockout Check", body: "If 5 consecutive failed attempts, the account is locked for 15 minutes. Lockout is returned as HTTP 423." },
          { title: "JWT Issued", body: "On success, a signed JWT (7-day expiry) is returned. The token is stored in localStorage." },
          { title: "Force Password Change", body: "If flagged, the user must change their password before accessing any other page." },
          { title: "Authorized Requests", body: "All subsequent API calls include the JWT as <code>Authorization: Bearer &lt;token&gt;</code>. Middleware validates on every request." }
        ]
      },
      {
        type: "h2",
        text: "Password Policy"
      },
      {
        type: "p",
        text: "Passwords must meet the following requirements:"
      },
      {
        type: "ul",
        items: [
          "Minimum 10 characters in length",
          "At least one uppercase letter (A-Z)",
          "At least one lowercase letter (a-z)",
          "At least one digit (0-9)",
          "At least one special character (!@#$%^&* etc.)",
          "Hashed with bcrypt at 12 salt rounds"
        ]
      },
      {
        type: "info-box",
        variant: "success",
        title: "Password Strength Indicator",
        body: "The panel includes a real-time password strength indicator that evaluates passwords on a 5-point scale: Weak, Fair, Good, Strong, Very Strong."
      },
      {
        type: "h2",
        text: "User Management"
      },
      {
        type: "p",
        text: "Admins can create, edit, and delete users from the User Management page. Each user can be assigned to specific servers, restricting their view and control to only those servers."
      },
      {
        type: "code-block",
        lang: "json",
        code: `// Creating a user (admin only)
POST /api/users
{
  "username": "player1",
  "password": "StrongP@ss123",
  "isAdmin": false
}`
      },
      {
        type: "info-box",
        variant: "warning",
        title: "Registration",
        body: "Registration is rate-limited to 3 attempts per minute per IP to prevent brute-force attacks."
      }
    ]
  },

  daemon: {
    title: "Daemon (Wings)",
    description: "Wings is the lightweight game server agent that runs on your game server machines. It handles process management, file serving, and telemetry.",
    sections: [
      {
        type: "h2",
        text: "Architecture"
      },
      {
        type: "p",
        text: "Wings is built as a modular Node.js application. The <code>index.js</code> orchestrator file (~100 lines) delegates all functionality to dedicated modules in the <code>src/</code> directory:"
      },
      {
        type: "table",
        headers: ["Module", "Responsibility"],
        rows: [
          ["logger.js", "Color-coded console output + daily log rotation (7-day retention)"],
          ["config.js", "Configuration singleton with validation and setup wizard"],
          ["utils.js", "Common utility functions used across modules"],
          ["stats.js", "System resource collection (CPU, RAM, disk)"],
          ["tools.js", "Java (8/26) and SteamCMD auto-installation"],
          ["process-manager.js", "Process spawning, CPU/RAM enforcement, watchdog with exponential backoff"],
          ["panel-client.js", "WebSocket client with reconnect logic and command dispatching"],
          ["sftp.js", "Full SFTP server with path traversal protection"],
          ["health-server.js", "Optional HTTP server exposing /health, /metrics, /stats"]
        ]
      },
      {
        type: "h2",
        text: "WebSocket Communication"
      },
      {
        type: "p",
        text: "Wings maintains a persistent WebSocket connection to the Panel. The connection uses:"
      },
      {
        type: "ul",
        items: [
          "Exponential backoff reconnection (1s to 30s maximum interval)",
          "Keep-alive heartbeat every 30 seconds",
          "JSON-based command protocol",
          "Console output batching (200ms flush interval)",
          "Auto-restart state persistence across reconnects"
        ]
      },
      {
        type: "h2",
        text: "SFTP Server"
      },
      {
        type: "p",
        text: "The built-in SFTP server allows file management for game servers. Key features:"
      },
      {
        type: "ul",
        items: [
          "Full SFTP protocol support (open, read, write, stat, readdir, rename, symlink)",
          "Path traversal protection — cannot escape the server's root directory",
          "Authentication delegated to the Panel via WebSocket",
          "Configurable on any port"
        ]
      },
      {
        type: "h2",
        text: "Health Endpoints"
      },
      {
        type: "p",
        text: "When configured with a <code>healthPort</code>, Wings exposes an HTTP server with monitoring endpoints:"
      },
      {
        type: "table",
        headers: ["Endpoint", "Format", "Description"],
        rows: [
          ["GET /health", "JSON", "Status, uptime, WS state, system stats"],
          ["GET /metrics", "Prometheus", "Prometheus-formatted metrics for scraping"],
          ["GET /stats", "JSON", "Detailed system resource information"]
        ]
      },
      {
        type: "code-block",
        lang: "json",
        code: `// Health endpoint response example
{
  "status": "healthy",
  "uptime": 86400,
  "wsState": "connected",
  "servers": 3,
  "system": {
    "cpu": 45.2,
    "memory": { "total": 16384, "used": 8192 },
    "disk": { "total": 500, "used": 120 }
  }
}`
      }
    ]
  },

  security: {
    title: "Security",
    description: "TURTLE GP is built with security as a first-class concern. Multiple layers of protection are applied at every level of the stack.",
    sections: [
      {
        type: "h2",
        text: "HTTP Security Headers"
      },
      {
        type: "p",
        text: "The Panel API sets the following security headers on every response:"
      },
      {
        type: "table",
        headers: ["Header", "Value", "Purpose"],
        rows: [
          ["Content-Security-Policy", "default-src 'self'", "Prevents XSS and data injection"],
          ["Strict-Transport-Security", "max-age=31536000; includeSubDomains", "Enforces HTTPS connections"],
          ["X-Content-Type-Options", "nosniff", "Prevents MIME-type sniffing"],
          ["Cross-Origin-Opener-Policy", "same-origin", "Isolates cross-origin windows"],
          ["Cross-Origin-Resource-Policy", "same-origin", "Restricts resource loading"]
        ]
      },
      {
        type: "h2",
        text: "Authentication Security"
      },
      {
        type: "p",
        text: "The authentication system implements several layers of protection:"
      },
      {
        type: "ul",
        items: [
          "<strong>Bcrypt Hashing</strong> &mdash; Passwords are hashed with bcrypt at 12 rounds (configurable)",
          "<strong>Account Lockout</strong> &mdash; 5 failed attempts trigger a 15-minute lockout",
          "<strong>Rate Limiting</strong> &mdash; Registration is limited to 3 requests per minute per IP",
          "<strong>Consistent Errors</strong> &mdash; Error messages never leak internal details (e.g., 'Invalid credentials' vs 'User not found')",
          "<strong>Password Policy</strong> &mdash; Enforced minimum complexity requirements",
          "<strong>Force Password Change</strong> &mdash; Default admin and new users must change password on first login",
          "<strong>SFTP Timing Fix</strong> &mdash; Authentication timing attack mitigated with early break"
        ]
      },
      {
        type: "h2",
        text: "JWT Security"
      },
      {
        type: "ul",
        items: [
          "Tokens expire after 7 days (configurable via <code>JWT_EXPIRY</code>)",
          "Signed with a configurable secret key",
          "Sent as <code>Authorization: Bearer &lt;token&gt;</code> header",
          "Validated on every protected route by auth middleware"
        ]
      },
      {
        type: "h2",
        text: "Daemon Security"
      },
      {
        type: "ul",
        items: [
          "WebSocket connections authenticated via token",
          "SFTP path traversal protection prevents access outside server directories",
          "Configurable health server (disabled by default, port 0)",
          "Process isolation — each server runs as a separate OS process"
        ]
      },
      {
        type: "info-box",
        variant: "danger",
        title: "Production Checklist",
        body: "Before deploying to production: (1) Change the default admin password. (2) Set a strong JWT_SECRET. (3) Configure CORS_ORIGIN to your domain. (4) Enable HTTPS via reverse proxy. (5) Set TRUST_PROXY=true if behind nginx."
      }
    ]
  },

  api: {
    title: "API Reference",
    description: "TURTLE GP exposes a RESTful JSON API. All endpoints are prefixed with <code>/api</code> and require authentication unless noted.",
    sections: [
      {
        type: "h2",
        text: "Authentication"
      },
      {
        type: "code-block",
        lang: "bash",
        code: `# Login
curl -X POST http://localhost:3001/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"username":"admin","password":"admin123"}'

# Response (success)
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": { "id": 1, "username": "admin", "isAdmin": true },
  "forcePasswordChange": true
}`
      },
      {
        type: "h2",
        text: "Endpoints"
      },
      {
        type: "table",
        headers: ["Method", "Path", "Auth", "Description"],
        rows: [
          ["POST", "/api/auth/login", "No", "User login"],
          ["POST", "/api/auth/register", "No", "Register new account (rate-limited)"],
          ["GET", "/api/auth/verify", "Yes", "Verify token validity"],
          ["PUT", "/api/auth/password", "Yes", "Change password"],
          ["GET", "/api/servers", "Yes", "List assigned servers"],
          ["GET", "/api/servers/:id", "Yes", "Get server details"],
          ["POST", "/api/servers/:id/start", "Yes", "Start server"],
          ["POST", "/api/servers/:id/stop", "Yes", "Stop server"],
          ["POST", "/api/servers/:id/restart", "Yes", "Restart server"],
          ["POST", "/api/servers/:id/clone", "Admin", "Clone server"],
          ["POST", "/api/servers/:id/install", "Yes", "Install/Reinstall server"],
          ["DELETE", "/api/servers/:id", "Admin", "Delete server"],
          ["GET", "/api/servers/:id/console", "Yes", "Get console logs"],
          ["POST", "/api/servers/:id/command", "Yes", "Send console command"],
          ["PUT", "/api/servers/:id/settings", "Yes", "Update server settings"],
          ["GET", "/api/users", "Admin", "List all users"],
          ["POST", "/api/users", "Admin", "Create user"],
          ["PUT", "/api/users/:id", "Admin", "Update user"],
          ["DELETE", "/api/users/:id", "Admin", "Delete user"],
          ["GET", "/api/admin/servers", "Admin", "List all servers"],
          ["POST", "/api/admin/servers", "Admin", "Create server"],
          ["GET", "/api/admin/nodes", "Admin", "List daemon nodes"],
          ["GET", "/api/admin/audit-log", "Admin", "View audit log"],
          ["GET", "/api/admin/stats", "Admin", "System statistics"]
        ]
      },
      {
        type: "h2",
        text: "Error Responses"
      },
      {
        type: "p",
        text: "All API endpoints return consistent error responses:"
      },
      {
        type: "code-block",
        lang: "json",
        code: `{
  "error": "Invalid credentials",
  "attemptsRemaining": 3
}

// Locked account
{ "error": "Account locked. Try again in 12 minutes." }

// Validation error
{ "error": "Password must be at least 10 characters" }`
      },
      {
        type: "info-box",
        variant: "info",
        title: "Authentication Header",
        body: "All authenticated endpoints require the header: <code>Authorization: Bearer &lt;jwt-token&gt;</code>"
      }
    ]
  },

  faq: {
    title: "Frequently Asked Questions",
    description: "Common questions and troubleshooting tips for TURTLE GP.",
    sections: [
      {
        type: "qna",
        items: [
          {
            q: "How do I reset the admin password?",
            a: "Delete the <code>database.sql</code> file and restart the server. A fresh database will be created with the default admin credentials (<code>admin</code> / <code>admin123</code>). <strong>Warning:</strong> This will delete all data."
          },
          {
            q: "The Daemon won't connect to the Panel",
            a: "Check that: (1) The Panel API is reachable from the Daemon host (ping the port). (2) The WebSocket URL in <code>daemon/config.json</code> is correct. (3) The authentication token matches what the Panel expects. (4) No firewall is blocking the connection."
          },
          {
            q: "How do I add a new game type?",
            a: "Game types are defined by their server software. Set the startup command to your server JAR or binary, and choose the appropriate Game ID. For Java-based games, the Daemon auto-detects and installs the required Java version."
          },
          {
            q: "Can I run multiple Daemon instances?",
            a: "Yes. Each Daemon registers itself as a separate node. The Panel can route server deployments to specific nodes. Each Daemon needs its own authentication token."
          },
          {
            q: "How do I enable HTTPS?",
            a: "TURTLE GP does not handle TLS directly. Use a reverse proxy like nginx or Caddy in front of the Panel API and configure HTTPS there. Set <code>TRUST_PROXY=true</code> if using a reverse proxy."
          },
          {
            q: "What's the difference between Panel and Daemon?",
            a: "The <strong>Panel</strong> is the web interface and API server. The <strong>Daemon (Wings)</strong> runs on game server machines and executes the actual game server processes. One Panel can manage many Daemons."
          },
          {
            q: "How do Webhook notifications work?",
            a: "The Panel sends Discord webhook messages for server lifecycle events (start, stop, crash, install, reinstall). Each event creates a color-coded embed with server name, game type, and optional details. Configure the webhook URL in the panel_settings table."
          },
          {
            q: "Why is my server showing 'error' status?",
            a: "The server process likely exited with a non-zero exit code. Check the console log for error messages. Common causes: missing Java version, incorrect startup command, insufficient RAM, or port conflicts."
          },
          {
            q: "How do I back up the panel data?",
            a: "Back up the <code>database.sql</code> file in the server root directory. This is a standard SQLite database containing all users, servers, and settings. <strong>Always stop the panel before copying the database file.</strong>"
          },
          {
            q: "The panel says 'Account locked' — what do I do?",
            a: "Wait 15 minutes for the lockout to expire automatically. If you're the admin and need immediate access, delete and recreate the database, or modify the <code>lockedUntil</code> field in the users table (requires SQLite knowledge)."
          }
        ]
      }
    ]
  }
};
