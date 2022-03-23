import json
import os

path = os.path.abspath("")
file_path = os.path.join(path, "input.json")


def get_input() -> dict:
    try:
        with open(file_path, "r") as f:
            return json.load(f)
    except OSError:
        print("Failed to load input.")
        return {}
    except ValueError:
        print("Failed to parse expected json.")
        return {}


def update_input(data: str) -> bool:
    try:
        with open(file_path, "w") as f:
            json.dump(data, f)
        return True
    except OSError:
        print("Failed to load input.")
        return False
