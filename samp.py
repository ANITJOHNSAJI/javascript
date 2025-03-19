class demo:
    
    def __init__(self):
            print("constructor")
class Demo1(demo):
    def __init__(self):
        print("child constructor")
        super().__init__()   

obj=Demo1()