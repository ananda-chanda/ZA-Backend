const companySchema = new mongoose.Schema({
    name: String,
    resources: Array,
  });
  
  module.exports = mongoose.model("Company", companySchema);
  