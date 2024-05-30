class Agenda 
{
    constructor(title, description, timestamp, durationMinutes, backupTimestamp1, backupTimestamp2, priorityLevel) {
        this.title          = title
        this.description    = description
        this.priorityLevel  = priorityLevel
        this.durationMinutes    = durationMinutes

        this.timestamp          = new Date(timestamp)
        this.backupTimestamp1   = new Date(backupTimestamp1)
        this.backupTimestamp2   = new Date(backupTimestamp2)
    }

    get endTimestamp() {
        return new Date(this.timestamp.getTime() + this.durationMinutes * 60000)
    }

    get backupEndTimestamp1() {
        return new Date(this.backupTimestamp1.getTime() + this.durationMinutes * 60000)
    }

    get backupEndTimestamp2() {
        return new Date(this.backupTimestamp2.getTime() + this.durationMinutes * 60000)
    }
}

class Scheduler
{
    static isOverlap(agenda1, agenda2) {
        return (agenda1.timestamp < agenda2.endTimestamp && agenda1.endTimestamp > agenda2.timestamp)
    }

    static checkOverlaps(agendas) {
        for (let i = 0; i < agendas.length; i++)
        for (let j = i + 1; j < agendas.length; j++)
        if (Scheduler.isOverlap(agendas[i], agendas[j]))
            return true
        return false
    }

  
    static queryTimeSlot(agendas, durationMinutes, startsFrom=false, hourRange={ from: 7, to: 2, range: 5 }, daysToSearch=7) {

        const ONE_MINUTE = 60000;
        const ONE_DAY = 86400000;
        
        // Convert existing time slots to milliseconds
        const usedTimeSlots = agendas.map(a => ({ from: a.timestamp.getTime(), to: a.endTimestamp.getTime() }));
        
        // Sort the used time slots by start time
        usedTimeSlots.sort((a, b) => a.from - b.from);

        // Initialize lastEnd with the startsFrom parameter
        let lastEnd = new Date(startsFrom ? startsFrom : usedTimeSlots[0].to).getTime();
      
        // Define the hour range in milliseconds from the start of the day
        const rangeStart = hourRange.from * 60 * 60 * 1000;
        const rangeEnd = hourRange.to * 60 * 60 * 1000;
        
        for (let day = 0; day < daysToSearch; day++) {
            // Calculate the start and end of the current day in milliseconds
            const dayStart = new Date(lastEnd + day * ONE_DAY).setHours(0, 0, 0, 0);
            const dayEnd = dayStart + ONE_DAY;
      
            const MINUTES_PER_ITERATION = 10

            for (
                let currentSlotStart = dayStart + rangeStart;
                currentSlotStart + durationMinutes * ONE_MINUTE <= dayStart + rangeEnd;
                currentSlotStart += ( ONE_MINUTE * MINUTES_PER_ITERATION )
                ) {
                    const potentialStart = currentSlotStart;
                    const potentialEnd = potentialStart + durationMinutes * ONE_MINUTE;
        
                    // Check for overlap with any used time slots
                    if (!usedTimeSlots.some(slot => (potentialStart < slot.to && potentialEnd > slot.from))) {
                        return { timestamp: new Date(potentialStart), durationMinutes: durationMinutes };
                    }
                }
        }
        // No suitable time slot found within the specified range and days
        return { timestamp: new Date(usedTimeSlots[usedTimeSlots.length-1]), durationMinutes: durationMinutes }; 
    }
      
    static findNewTimeSlot(agendas, agenda) {
        const usedTimeSlots = agendas.map(a => ({ from: a.timestamp.getTime(), to: a.endTimestamp.getTime() }))
        const backupSlots = [
            { from: agenda.backupTimestamp1.getTime(), to: agenda.backupEndTimestamp1.getTime() },
            { from: agenda.backupTimestamp2.getTime(), to: agenda.backupEndTimestamp2.getTime() },
            { from: agenda.timestamp.getTime() + 86400000, to: agenda.endTimestamp.getTime() + 86400000 } // Plus one day
        ]
    
        for (let slot of backupSlots) {
            if (!usedTimeSlots.some(u => (slot.from < u.to && slot.to > u.from))) {
                return { timestamp: new Date(slot.from), durationMinutes: agenda.durationMinutes }
            }
        }
        return null
    }

    static scheduleAgendas(agendas) {
        let overlapsExist = Scheduler.checkOverlaps(agendas)
    
        while (overlapsExist) {
            for (let i = 0; i < agendas.length; i++)
            for (let j = i + 1; j < agendas.length; j++)
            if (Scheduler.isOverlap(agendas[i], agendas[j]))
            {
                const lowerPriorityIndex = agendas[i].priorityLevel > agendas[j].priorityLevel ? j : i
                const lowerPriorityAgenda = agendas[lowerPriorityIndex]
                const newSlot = Scheduler.findNewTimeSlot(agendas, lowerPriorityAgenda)
                if (!newSlot) newSlot = Scheduler.queryTimeSlot(agendas, lowerPriorityAgenda.durationMinutes)

                lowerPriorityAgenda.timestamp = newSlot.timestamp
            }

            overlapsExist = Scheduler.checkOverlaps(agendas)
        }
    
        return agendas
    }
    
}

// Example usage
const agenda1 = new Agenda('Meeting A', 'Discuss project A', '2024-06-01T10:00:00', 60, '2024-06-02T10:00:00', '2024-06-03T10:00:00', 1);
const agenda2 = new Agenda('Meeting B', 'Discuss project B', '2024-06-01T12:00:00', 60, '2024-06-02T12:00:00', '2024-06-03T12:00:00', 2);
const agenda3 = new Agenda('Meeting C', 'Discuss project C', '2024-06-01T12:00:00', 60, '2024-06-02T14:00:00', '2024-06-03T14:00:00', 3);
const agenda4 = new Agenda('Meeting D', 'Discuss project D', '2024-06-01T09:00:00', 120, '2024-06-02T10:00:00', '2024-06-03T10:00:00', 1);

