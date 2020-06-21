const mongoose = require("mongoose");

const TareaSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  deuda: {
    type: String,
    required: true,
    trim: true,
  },

  estado: {
    type: Boolean,
    default: false,
  },
  creado: {
    type: Date,
    default: new Date(
      new Date().getTime() - new Date().getTimezoneOffset() * 60000
    ),
  },
  proyecto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Proyecto",
  },
});

module.exports = mongoose.model("Tarea", TareaSchema);
