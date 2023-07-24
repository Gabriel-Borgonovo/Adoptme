import { usersService } from "../services/index.js";
import { petsService } from "../services/index.js";

const getIndex = (req, res) => {
    res.render('index', {
        title: "Adoptme - Inicio",
    });
}

const getUsers = async (req, res) => {
    const users = await usersService.getAll();

    res.render('users', {
        title: 'Adoptme - Usuarios',
        users: users.map(u => u.toObject())
    });
}

const getPets = async (req, res) => {
    const pets = await petsService.getAll();

    res.render('pets', {
        title: 'Adoptme - Pets',
        pets: pets.map(u => u.toObject())
    });
}


export default {
    getIndex,
    getUsers,
    getPets,
}

/**1:33:46 */