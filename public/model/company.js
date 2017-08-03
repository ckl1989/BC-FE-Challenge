class Company {
  constructor(properties){
    this.name = properties.name || "";
    this.avatarUrl = properties.avatarUrl || "#";
    this.laborType = properties.laborType || "";
    this.phone = properties.phone || "";
    this.website = properties.website || "";
  }
}
