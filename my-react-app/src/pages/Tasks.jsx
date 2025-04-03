



import { useState, useEffect } from "react";
import axios from "axios";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "", due_date: "", priority: "Medium" });
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/tasks/", {
        headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
      });
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleAddTask = async () => {
    if (!newTask.title.trim() || !newTask.description.trim()) {
      alert("Please enter both title and description!");
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/tasks/", newTask, {
        headers: { Authorization: `Bearer ${localStorage.getItem("access")}` }
      });
      setTasks((prevTasks) => [...prevTasks, response.data]);
      setNewTask({ title: "", description: "", due_date: "", priority: "Medium" });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setNewTask({ title: task.title, description: task.description, due_date: task.due_date, priority: task.priority });
  };

  const handleUpdateTask = async () => {
    if (!editingTask) return;
    try {
      await axios.put(`http://127.0.0.1:8000/api/tasks/${editingTask.id}/`, newTask, {
        headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
      });
      fetchTasks();
      setEditingTask(null);
      setNewTask({ title: "", description: "", due_date: "", priority: "Medium" });
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/tasks/${taskId}/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
      });
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleCompleteTask = async (taskId, completed) => {
    try {
      await axios.patch(`http://127.0.0.1:8000/api/tasks/${taskId}/`, { completed: !completed }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("access")}` }
      });
      setTasks((prevTasks) => prevTasks.map((task) => task.id === taskId ? { ...task, completed: !completed } : task));
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Task Manager</h2>

      <div className="card p-4 mb-4 shadow-sm">
        <h5 className="text-primary">{editingTask ? "Edit Task" : "Add New Task"}</h5>
        <input type="text" className="form-control mb-2" placeholder="Task Title" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} required />
        <textarea className="form-control mb-2" placeholder="Task Description" value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} required />
        <input type="date" className="form-control mb-2" value={newTask.due_date} onChange={(e) => setNewTask({ ...newTask, due_date: e.target.value })} required />
        <select className="form-control mb-2" value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button className={`btn ${editingTask ? "btn-success" : "btn-primary"} mt-2`} onClick={editingTask ? handleUpdateTask : handleAddTask}>{editingTask ? "Update Task" : "Add Task"}</button>
        {editingTask && (<button className="btn btn-secondary mt-2 ms-2" onClick={() => setEditingTask(null)}>Cancel</button>)}
      </div>

      <ul className="list-group">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5 className={task.completed ? "text-success" : ""}>{task.title}</h5>
                <p>{task.description}</p>
                <small className="text-muted">Due: {task.due_date} | Priority: {task.priority}</small>
              </div>
              <div>
                <button className={`btn btn-${task.completed ? "secondary" : "success"} btn-sm me-2`} onClick={() => handleCompleteTask(task.id, task.completed)}>{task.completed ? "Undo" : "Complete"}</button>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditTask(task)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item text-center">No tasks available</li>
        )}
      </ul>
    </div>
  );
};

export default Tasks;
