// src/classCreator.ts
export function createClassEnv() {
    const NewClass = class {
        className: string | undefined;
        variable1: string;
        variable2: number;

        constructor(variable1: string, variable2: number) {
            if (!process.env.CLASS_NAME) {
                throw new Error('CLASS_NAME est absente.');
            }
            this.className = process.env.CLASS_NAME;
            this.variable1 = variable1;
            this.variable2 = variable2;
        }

        getClassName() {
            return this.className;
        }
        getVariable1() {
            return this.variable1;
        }
        getVariable2() {
            return this.variable2;
        }
        getFunctionString() {
            return this.variable1 + ".." + this.variable2;
        }
    };

    return NewClass;
}