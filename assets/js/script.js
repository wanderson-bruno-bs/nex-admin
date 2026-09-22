/**Dados dos usuarios */
let users = JSON.parse(localStorage.getItem("users")) || [
    {
        name: "João Silva",
        email: "joao@email.com",
        status: "Ativo"
    },
    {
        name: "Maria Santos",
        email: "maria@email.com",
        status: "Inativo"
    },
    {
        name: "Pedro Oliveira",
        email: "pedro@email.com",
        status: "Ativo"
    }
];

/**Salvar usuarios */

function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
}

/**Renderizar usuarios */

function renderUsers(userList = users) {

    const tbody = document.querySelector("#users-table-body");

    tbody.innerHTML = "";

    userList.forEach(function(user) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.status}</td>
            <td>
                <button class="btn-action edit-btn">Editar</button>
                <button class="btn-action delete-btn">Excluir</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

renderUsers();
updateReports();
updateDashboard();
/**Fim */

/**Função filtros */
const searchUser = document.querySelector("#search-user");
const statusFilter = document.querySelector("#status-filter");

function filterUsers() {

    const searchTerm = searchUser.value.toLowerCase();
    const selectedStatus = statusFilter.value;

    const filteredUsers = users.filter(function(user) {

        const name = user.name.toLowerCase();
        const email = user.email.toLowerCase();

        const matchesSearch =
            name.includes(searchTerm) ||
            email.includes(searchTerm);

        const matchesStatus =
            selectedStatus === "Todos" ||
            user.status === selectedStatus;

        return matchesSearch && matchesStatus;
    });

    renderUsers(filteredUsers);
}

searchUser.addEventListener("input", filterUsers);
statusFilter.addEventListener("change", filterUsers);


/**Numeros Dashboard */
function updateDashboard() {

    const totalUsers = users.length;

    const activeUsers = users.filter(function(user) {
        return user.status === "Ativo";
    }).length;

    const sevenDaysAgo = new Date();

    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const newUsers = users.filter(function(user) {

        if (!user.createdAt) {
            return false;
        }

        const createdDate = new Date(user.createdAt);

        return createdDate >= sevenDaysAgo;

    }).length;

    document.querySelector("#dashboard-total-users").textContent = totalUsers;
    document.querySelector("#dashboard-active-users").textContent = activeUsers;
    document.querySelector("#dashboard-new-users").textContent = newUsers;
}

/**Numeros Relatorios */
function updateReports() {

    const totalUsers = users.length;

    const activeUsers = users.filter(function (user) {
        return user.status === "Ativo";
    }).length;

    const inactiveUsers = users.filter(function (user) {
        return user.status === "Inativo";
    }).length;

    document.querySelector("#total-users").textContent = totalUsers;
    document.querySelector("#active-users").textContent = activeUsers;
    document.querySelector("#inactive-users").textContent = inactiveUsers;
}



/**Constantes */
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#user-modal");
const userForm = document.querySelector("#user-form");
const usersTableBody = document.querySelector("#users-table-body");
const modalTitle = document.querySelector("#modal-title");
const saveUserButton = document.querySelector("#save-user");

let editingRow = null;

/**Botão editar e excluir */
usersTableBody.addEventListener("click", function (event) {
    const clickedButton = event.target;

    if (clickedButton.classList.contains("delete-btn")) {
        const confirmation = confirm(
            "Tem certeza que deseja excluir este usuário?"
        );

        if (confirmation) {
            const row = clickedButton.closest("tr");

            const index = Array.from(usersTableBody.children).indexOf(row);

            users.splice(index, 1);

            saveUsers();

            renderUsers();
            updateReports();
            updateDashboard();
        }
    }

    if (clickedButton.classList.contains("edit-btn")) {
        editingRow = clickedButton.closest("tr");

        const name = editingRow.children[0].textContent;
        const email = editingRow.children[1].textContent;
        const status = editingRow.children[2].textContent.trim();

        document.querySelector("#name").value = name;
        document.querySelector("#email").value = email;
        document.querySelector("#status").value = status;

        modalTitle.textContent = "Editar usuário";
        saveUserButton.textContent = "Salvar alterações";

        modal.classList.add("show");
    }
});

openModalButton.addEventListener("click", function () {
    modal.classList.add("show");
});

closeModalButton.addEventListener("click", function () {
    modal.classList.remove("show");
});

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});


/**Botão de adicionar usuario */
userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const status = document.querySelector("#status").value;

    const statusClass =
        status === "Ativo"
            ? "active-status"
            : "inactive-status";

    if (editingRow) {

        const index = Array.from(usersTableBody.children).indexOf(editingRow);

        users[index].name = name;
        users[index].email = email;
        users[index].status = status;

        saveUsers();
        renderUsers();
        updateReports();
        updateDashboard();

        editingRow = null;
    } else {

        const newUser = {
            name: name,
            email: email,
            status: status,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);

        saveUsers();
        renderUsers();
        updateReports();
        updateDashboard();
    }

    alert("Usuário salvo com sucesso!");

    userForm.reset();
    modalTitle.textContent = "Adicionar usuário";
    saveUserButton.textContent = "Salvar usuário";
    modal.classList.remove("show");
});
/**Fim do botão de adicionar usuario */

/**Botão laterais */
const dashboardSection = document.querySelector("#dashboard-section");
const usersSection = document.querySelector("#users-section");
const reportsSection = document.querySelector("#reports-section");
const settingsSection = document.querySelector("#settings-section");

/**função para controlar os itens ativos */
function setActiveLink(activeLink) {
    dashboardLink.classList.remove("active");
    usersLink.classList.remove("active");
    reportsLink.classList.remove("active");
    settingsLink.classList.remove("active");

    activeLink.classList.add("active");
}
/**fim função */

const dashboardLink = document.querySelector("#dashboard-link");
const usersLink = document.querySelector("#users-link");
const reportsLink = document.querySelector("#reports-link");
const settingsLink = document.querySelector("#settings-link");


dashboardLink.addEventListener("click", function (event) {
    event.preventDefault();

    dashboardSection.style.display = "block";
    usersSection.style.display = "none";
    reportsSection.style.display = "none";
    settingsSection.style.display = "none";

    setActiveLink(dashboardLink);
});


usersLink.addEventListener("click", function (event) {
    event.preventDefault();

    dashboardSection.style.display = "none";
    usersSection.style.display = "block";
    reportsSection.style.display = "none";
    settingsSection.style.display = "none";

    setActiveLink(usersLink);

    document.querySelector(".sidebar").classList.remove("open");
});


reportsLink.addEventListener("click", function (event) {
    event.preventDefault();

    dashboardSection.style.display = "none";
    usersSection.style.display = "none";
    reportsSection.style.display = "block";
    settingsSection.style.display = "none";

    setActiveLink(reportsLink);

    sidebar.classList.remove("open");
});


settingsLink.addEventListener("click", function (event) {
    event.preventDefault();

    dashboardSection.style.display = "none";
    usersSection.style.display = "none";
    reportsSection.style.display = "none";
    settingsSection.style.display = "block";

    setActiveLink(settingsLink);
});


/**Configurações*/

const systemNameInput = document.querySelector("#system-name");
const systemEmailInput = document.querySelector("#email-system");
const saveSettingsButton = document.querySelector("#save-settings");



const savedSettings =
    JSON.parse(localStorage.getItem("settings")) || {};

if (savedSettings.systemName) {
    systemNameInput.value = savedSettings.systemName;
}

if (savedSettings.systemEmail) {
    systemEmailInput.value = savedSettings.systemEmail;
}



saveSettingsButton.addEventListener("click", function() {

    const settings = {
        systemName: systemNameInput.value,
        systemEmail: systemEmailInput.value
    };

    localStorage.setItem(
        "settings",
        JSON.stringify(settings)
    );

    alert("Configurações salvas com sucesso!");
});



const mobileMenuButton = document.querySelector("#mobile-menu-btn");
const sidebar = document.querySelector(".sidebar");
const menuLinks = document.querySelectorAll(".menu a");

mobileMenuButton.addEventListener("click", function() {
    sidebar.classList.toggle("open");
});

menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        sidebar.classList.remove("open");
    });
});