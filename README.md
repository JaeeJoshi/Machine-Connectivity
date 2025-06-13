Industrial Machine Connectivity Platform

A full-stack Industrial IoT application to connect, monitor, and visualize real-time machine data.

## 🔧 Tech Stack
- **Frontend**: React.js, Chart.js, WebSocket
- **Backend**: Node.js, Express, MQTT.js, MongoDB
- **Protocols**: MQTT (machine communication), REST, WebSocket
- **Auth**: JWT-based authentication
- **Deployment**: Docker, Nginx (optional)

## 🚀 Features
- Real-time machine data ingestion via MQTT
- RESTful APIs to fetch machine history, alerts, and logs
- WebSocket support for real-time updates on the dashboard
- Secure login with JWT and role-based permissions
- User-friendly UI for monitoring machines, alarms, and KPIs

## 🖥️ Sample Screens
- ✅ Live Machine Dashboard (Status, Cycle Time, Downtime)
- 🔔 Alarm Notification Panel
- 📊 Historical Trends & Reports

##Structure
[ Senson ---> PLC ] <--Modbus--> [ Node.js Backend ] <--RESTApi--> [ React Frontend ]
                                     | 
                                     v
                                [ MongoDB ]

