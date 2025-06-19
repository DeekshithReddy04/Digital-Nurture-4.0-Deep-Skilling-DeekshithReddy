public class Main {
    public static void main(String[] args) {
        TaskList taskList = new TaskList();

        taskList.addTask(1, "Design UI", "Pending");
        taskList.addTask(2, "Build Backend", "In Progress");
        taskList.addTask(3, "Write Tests", "Not Started");

        System.out.println("All Tasks:");
        taskList.displayTasks();

        System.out.println("\nSearching for Task 2:");
        Task found = taskList.searchTask(2);
        System.out.println(found != null ? found.taskName + " | " + found.status : "Task not found");

        System.out.println("\nDeleting Task 1...");
        taskList.deleteTask(1);
        taskList.displayTasks();
    }
}
