const { RESTDataSource } = require("apollo-datasource-rest");

class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000";
  }

  async getUsers() {
    const users = await this.get("/users");
    return users.map(async (user) => ({
      id: user.id,
      nome: user.nome,
      ativo: user.ativo,
      role: await this.get(`/roles/${user.role}`),
    }));
  }

  async getUser(id) {
    const user = await this.get(`/users/${id}`);
    user.role = await this.get(`/roles/${user.role}`);

    return user;
  }

  async addUser(user) {
    const users = await this.getUsers();
    user.id = users.length + 1;

    const role = await this.getRoleByType(user.role);

    await this.post("users", {
      ...user,
      role: role[0].id,
    });

    return {
      ...user,
      role: role[0],
    };
  }

  async updateUser(user) {
    const role = await this.getRoleByType(user.role);
    console.log(role);

    await this.put(`users/${user.id}`, {
      ...user,
      role: role[0].id,
    });

    return {
      ...user,
      role: role[0],
    };
  }

  async deleteUser(id) {
    await this.delete(`/users/${id}`);
    return id;
  }

  async getRoleByType(type) {
    return this.get(`/roles?type=${type}`);
  }
}

module.exports = UsersAPI;
