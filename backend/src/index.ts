import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server Open & Connected To Database 🤟"),
    );
  })
  .catch((err) => console.log(err));

//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
//org-DbIeAtRxnnlBCXEqr14IsJ9u
