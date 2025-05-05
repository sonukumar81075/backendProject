const app = require('../src/index')
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is runing on this port 5000");
});
