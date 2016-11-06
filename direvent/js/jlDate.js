Date.prototype.addDays = function (days)
{
  var result_ = new Date(this.valueOf());
  result_.setDate(result_.getDate() + days);
  return result_;
}

