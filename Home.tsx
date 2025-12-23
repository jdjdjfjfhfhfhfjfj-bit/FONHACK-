import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { toast } from "sonner";

export default function Home() {
  const handleUnavailable = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.error("غير متوفر الآن");
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 } as any,
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-md z-10"
      >
        <Card className="bg-card/50 backdrop-blur-sm border-none shadow-2xl p-8 flex flex-col items-center gap-8">
          <motion.div variants={itemVariants} className="text-center mb-2">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground tracking-wide">
              مرحبا بك في موقع
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-4">
            <p className="text-5xl md:text-6xl font-bold font-mono tracking-widest animate-rainbow mb-3">fon</p>
          </motion.div>

          <div className="w-full flex flex-col gap-4">
            <motion.div variants={itemVariants} className="text-center mb-4">
              <p className="text-lg md:text-xl text-primary font-mono tracking-widest">هاكات ايفون</p>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a href="itms-services://?action=download-manifest&url=https%3A%2F%2Fsigner.esign-ios.com%3A3000%2Fsigned%2Fmanifest_1766505297491.plist" target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button 
                  className="w-full h-14 text-lg font-mono bg-secondary hover:bg-secondary/80 text-secondary-foreground border-none shadow-[0_0_15px_rgba(0,188,212,0.3)] hover:shadow-[0_0_25px_rgba(0,188,212,0.5)] transition-all duration-300 rounded-lg"
                >
                  دلتا
                </Button>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a href="itms-services://?action=download-manifest&url=https%3A%2F%2Fsigner.esign-ios.com%3A3000%2Fsigned%2Fmanifest_1766511076392.plist" target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button 
                  className="w-full h-14 text-lg font-mono bg-secondary hover:bg-secondary/80 text-secondary-foreground border-none shadow-[0_0_15px_rgba(0,188,212,0.3)] hover:shadow-[0_0_25px_rgba(0,188,212,0.5)] transition-all duration-300 rounded-lg"
                >
                  دلتا فتنام
                </Button>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a href="itms-services://?action=download-manifest&url=https://skibx.com/ota.plist" target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button 
                  className="w-full h-14 text-lg font-mono bg-secondary hover:bg-secondary/80 text-secondary-foreground border-none shadow-[0_0_15px_rgba(0,188,212,0.3)] hover:shadow-[0_0_25px_rgba(0,188,212,0.5)] transition-all duration-300 rounded-lg"
                >
                  سكيبكس
                </Button>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                onClick={handleUnavailable}
                className="w-full h-14 text-lg font-mono bg-secondary hover:bg-secondary/80 text-secondary-foreground border-none shadow-[0_0_15px_rgba(0,188,212,0.3)] hover:shadow-[0_0_25px_rgba(0,188,212,0.5)] transition-all duration-300 rounded-lg"
              >
                سكيبكس فتنام
              </Button>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="mt-4 text-xs text-muted-foreground font-mono">
            &copy; 2025 fon SYSTEM
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
}
