// Successfully create and save a new degree with valid data
it('should create and save a new degree when provided with valid data', async () => {
    const degreeData = { name: 'Bachelor of Science', field: 'Computer Science' };
    const mockSave = jest.fn().mockResolvedValue(degreeData);
    jest.mock('../models/Education', () => {
        return jest.fn().mockImplementation(() => {
        return { save: mockSave };
        });
    });
    const createDegree = require('../services/educationService').createDegree;
    const result = await createDegree(degreeData);
    expect(mockSave).toHaveBeenCalled();
    expect(result).toEqual(degreeData);
});

// Attempt to create a degree with missing required fields
it('should throw an error when required fields are missing', async () => {
    const degreeData = { name: '' }; // Missing required fields
    const mockSave = jest.fn().mockRejectedValue(new Error('Validation Error'));
    jest.mock('../models/Education', () => {
        return jest.fn().mockImplementation(() => {
        return { save: mockSave };
        });
    });
    const createDegree = require('../services/educationService').createDegree;
    await expect(createDegree(degreeData)).rejects.toThrow('Validation Error');
});