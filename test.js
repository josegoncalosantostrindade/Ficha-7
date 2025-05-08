controllers.get = async (req,res) => {
  const { id } = req.params;
  const data = await Employee.findAll({
  where: { id: id },
  include: [ Role ]
  })
  .then(function(data){
  return data;
  })
  .catch(error =>{
  return error;
  })
  res.json({ success: true, data: data });
  }