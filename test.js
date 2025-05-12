controllers.update = async (req, res) => {
  // parameter get id
  const { id } = req.params;
  // parameter POST
  const { name, email, address, phone, role } = req.body;
  // Update data
  const data = await Employee.update(
    {
      name: name,
      email: email,
      address: address,
      phone: phone,
      roleId: role,
    },
    {
      where: { id: id },
    }
  )
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data, message: "Updated successful" });
};
