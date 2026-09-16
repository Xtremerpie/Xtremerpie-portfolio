import tkinter as tk
from tkinter import scrolledtext
import time

class AIZELDualMonitorApp:
    def __init__(self, root):
        self.root = root
        self.root.title("AIZEL Main Monitor")
        self.root.geometry("700x400")
                    
        self.label_main = tk.Label(root, text="AIZEL Main System Log", font=("Helvetica", 16, "bold"))
        self.label_main.pack(pady=5)
                    
        self.text_area_main = scrolledtext.ScrolledText(root, wrap=tk.WORD, font=("Arial", 12), padx=5, pady=5)
        self.text_area_main.pack(expand=True, fill='both', padx=5, pady=5)
                    
                            # Create second window
        self.second_window = tk.Toplevel(root)
        self.second_window.title("AIZEL Secondary Log")
        self.second_window.geometry("700x400+750+0") # Position it next to main window
                    
        self.label_second = tk.Label(self.second_window, text="AIZEL Secondary System Log", font=("Helvetica", 16, "bold"))
        self.label_second.pack(pady=5)
                    
        self.text_area_second = scrolledtext.ScrolledText(self.second_window, wrap=tk.WORD, font=("Arial", 12), padx=5, pady=5)
        self.text_area_second.pack(expand=True, fill='both', padx=5, pady=5)
                            
                                    # Wait for 5 seconds and then simulate typing long text
        self.root.after(5000, self.simulate_long_text)
                    
        def simulate_long_text(self):
            long_text = f"""
SYSTEM LOG [{time.ctime()}]

--- Status Update ---
Welcome back, Xtremerpie sir. Two monitoring windows activated.timeCritical Alerts during previous session: 
- CPU Usage: Peaked at 100%
- RAM Utilization: Critically high at 91-95%
Action recommended: Please close unnecessary heavy applications immediately to stabilize the system.time
--- Academic Focus ---
Reminder: Chemistry Test tomorrow (July 20) on 'Structure of Atom' (up to Heisenberg principle). 
Preparation is crucial, sir.StopAsyncIteration
--- AIZEL Note ---
The previous code indentation error has been addressed by rewriting the full application structure for dual monitoring.StopAsyncIteration"""
        self.text_area_main.delete(1.0, tk.END)
        self.text_area_main.insert(tk.INSERT, "long_text")
        self.text_area_second.delete(1.0, tk.END)
        self.text_area_second.insert(tk.INSERT, "long_text")
        
        if __name__ == "__main__":
                    root = tk.Tk()
        app = AIZELDualMonitorApp(root)
        root.mainloop()