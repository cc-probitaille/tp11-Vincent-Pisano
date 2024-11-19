import { createClassEnv } from "../reflexion"

describe.only('createClassFromEnv', () => {

    afterAll(() => {
        delete process.env.CLASS_NAME;
    })

    it('should create a dynamic class and access its variables/functions', () => {
        process.env.CLASS_NAME = "Chat";

        let newClass = createClassEnv();
        let instanceChat = new newClass("Il a beaucoup de griffes", 3);

        expect(instanceChat.getClassName()).toBe("Chat");
        expect(instanceChat.getVariable1()).toBe("Il a beaucoup de griffes");
        expect(instanceChat.getVariable2()).toBe(3);
        expect(instanceChat.getFunctionString()).toBe("Il a beaucoup de griffes..3");
    });

    it('should throw an error if the env variable is undefined', () => {
        delete process.env.CLASS_NAME

        expect(createClassEnv()).toThrow('CLASS_NAME est absente.')
    });
});