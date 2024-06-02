export class SchedulerAI
{
    static isOverlap (task1, task2) {
        const dt = SchedulerAI.dt
        const t1 = new Date(task1.date).getTime()
        const t2 = new Date(task2.date).getTime()

        return (t1 < (t2+dt) && (t1+dt) > t2)
    }

    static checkOverlaps (tasks) {
        for (let i = 0; i < tasks.length; i++)
        for (let j = i + 1; j < tasks.length; j++)
        if (SchedulerAI.isOverlap(tasks[i], tasks[j]))
            return true
        return false
    }

    static queryTimeSlot(tasks, startsFrom=false, hourRange={ from: 7, to: 21 }, daysToSearch=7) {

        const dt = SchedulerAI.dt
        const one_min = SchedulerAI.MIN
        const one_day = SchedulerAI.DAY
             
        const usedTimeSlots = tasks.map(a => new Date(a.date).getTime());

        usedTimeSlots.sort((a, b) => a - b);

        // Initialize lastEnd with the startsFrom parameter
        let lastEnd = new Date(startsFrom ? startsFrom : usedTimeSlots[0]).getTime();
      
        // Define the hour range in milliseconds from the start of the day
        const rangeStart = hourRange.from * 60 * 60 * 1000;
        const rangeEnd = hourRange.to * 60 * 60 * 1000;
        

        for (let day = 0; day < daysToSearch; day++) {
            const dayStart = new Date(lastEnd + day * one_day).setHours(0, 0, 0, 0);
            const dayEnd = dayStart + one_day;
      
            for (
                let currentSlotStart = dayStart + rangeStart;
                currentSlotStart + dt <= dayStart + rangeEnd;
                currentSlotStart += one_min
                ) {
                    const potentialStart = currentSlotStart;
        
                    // Check for overlap with any used time slots
                    if (!usedTimeSlots.some(slot => (potentialStart < slot+dt && potentialStart+dt > slot))) {
                        return new Date(potentialStart);
                    }
                }
        }
        // No suitable time slot found within the specified range and days
        return new Date(usedTimeSlots[usedTimeSlots.length-1] + dt); 
    }

    static recommendDate(tasks) {
        const temp = structuredClone(tasks)

        const date = SchedulerAI.queryTimeSlot(temp)
        temp.push({date: date})
        const date2 = SchedulerAI.queryTimeSlot(temp)
        temp.push({date: date2})
        const date3 = SchedulerAI.queryTimeSlot(temp)
        temp.push({date: date3})
        
        return {
            date: date,
            date2: date2,
            date3: date3
        }
    }

    static findNewTimeSlot(tasks, task) {
        const dt = SchedulerAI.dt
        const usedTimeSlots = tasks.map(task => new Date(task.date).getTime())
        const backupSlots = [
            new Date(task.date2).getTime(),
            new Date(task.date3).getTime(),
            new Date(task.date).getTime() + SchedulerAI.DAY,
            new Date(task.date2).getTime() + SchedulerAI.DAY,
            new Date(task.date3).getTime() + SchedulerAI.DAY
        ]
    
        for (let slot of backupSlots) {
            if (!usedTimeSlots.some(u => (slot < u+dt && slot+dt > u))) {
                return new Date(slot)
            }
        }
        return null
    }

    static scheduleTask(tasks) {

        const newTasks = structuredClone(tasks)

        const priority = task => ({LOW:1,MEDIUM:2,HIGH:3}[task.priority])

        while (SchedulerAI.checkOverlaps(newTasks)) {
            for (let i = 0; i < newTasks.length; i++)
            for (let j = i + 1; j < newTasks.length; j++)
            if (SchedulerAI.isOverlap(newTasks[i], newTasks[j]))
            {
                const lowerPriorityIndex = priority(newTasks[i]) > priority(newTasks[j]) ? j : i
                const lowerPriorityTask = newTasks[lowerPriorityIndex]
                let newSlot = SchedulerAI.findNewTimeSlot(newTasks, lowerPriorityTask)
                if (!newSlot) newSlot = SchedulerAI.queryTimeSlot(newTasks)

                lowerPriorityTask.date = newSlot
            }
        }
    
        return newTasks
    }


    static dt = 3600000 // 1 hour
    static MIN = 60000
    static HOUR = 3600000
    static DAY = 86400000

}
